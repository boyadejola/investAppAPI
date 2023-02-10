const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const bcrypt = require("bcryptjs");
const { randomString, calculateCapitalBack } = require('../middleware/authentication');
const { constants } = require('../model/constants');
const roles = require('../model/roles.json');

const postDeposit = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { id, details, gateway, amount } = req.body;
    if (userid && details && gateway && amount) {
      const insertQuery = `INSERT INTO deposit (userid, details, gateway, amount, status, createdon, isactive, isapproved) 
      VALUES (${userid}, '${details}', '${gateway}', ${amount}, 'Deposited', now(), true, false)`;
      const rews = await connectDB.query(insertQuery);
      constants.apiResponse.code = StatusCodes.OK;
      constants.apiResponse.data = 'Successfully deposited, kindly wait for approval';
      constants.apiResponse.msg = 'Successfully deposited, kindly wait for approval';
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const postWithdraw = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { id, details, gateway, amount } = req.body;
    if (userid && details && gateway && amount) {

      // const checkamount = await connectDB.query(`select * from usersinvest where interestwallet`);
      // ISME KAFI CHECKS HAIN LIKE AMOUNT CHECK

      // const insertQuery = `INSERT INTO deposit (userid, details, gateway, amount, status, createdon, isactive, isapproved) 
      // VALUES (${id}, ${details}, ${gateway}, ${amount}, 'false', now(), true, false)`;
      // const rews = await connectDB.query(insertQuery);
      // constants.apiResponse.code = StatusCodes.OK;
      // constants.apiResponse.data = 'successful';
      // constants.apiResponse.msg = 'successful';
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const approveDeposit = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { id } = req.body;
    if (id && role && (role == roles.super_admin || role == roles.admin)) {
      const getdep = await connectDB.query(`select * from deposit where depositid = ${id}`);
      if (getdep && getdep.length > 0) {
        let data = await connectDB.query(`update deposit set isapproved = true where depositid = ${id}`);
        let datsa = await connectDB.query(`UPDATE usersinvest SET depositwallet = ${getdep[0].amount} WHERE (userid = ${getdep[0].userid})`);
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = 'Deposit is Successfully approved';
        constants.apiResponse.msg = 'Deposit is Successfully approved';
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const approveWithdraw = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { id } = req.body;
    if (id && role && (role == roles.super_admin || role == roles.admin)) {
      const getwith = await connectDB.query(`select * from withdraw where withdrawid=${id}`);
      if (getwith && getwith.length > 0) {
        let data = await connectDB.query(`update withdraw set isapproved = true where withdrawid=${id}`);
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = 'successful';
        constants.apiResponse.msg = 'successful';
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const joinplan = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { id, amount, wallet } = req.body;
    if (id && amount && wallet) {
      const getwith = await connectDB.query(`select * from plans where planid=${id}`);
      const userDB = await connectDB.query(`select * from usersinvest where userid=${userid}`);
      if (getwith && getwith.length > 0 && userDB && userDB.length > 0) {
        let data = getwith[0];
        let user = userDB[0];
        let allow = false;
        let ermsg = 'Kindly try later';
        if (parseFloat(amount) >= parseFloat(data.min)) {
          allow = true;
        }
        else {
          ermsg = `Min Amount is ${data.min} for this plan`
        }

        //user wallet check
        const userWallet = wallet == constants.userWallets.deposit ? user.depositwallet : user.interestwallet;
        const remains = (userWallet ? parseFloat(userWallet) : 0) - parseFloat(amount);
        if (remains < 0) {
          allow = false;
          ermsg = `User do not have enough balance in ${constants.userWallets.deposit ? "Deposit" : "Interest"} Wallet`;
        }
        if (allow) {
          const capitalbck = calculateCapitalBack(data, parseFloat(amount));
          // const nextPay = 0;
          const insertPlan = await connectDB.query(`INSERT INTO userplans (userid, planid, walletid, amount, isactive, createdon) VALUES (${userid}, ${id}, ${wallet}, ${parseFloat(amount)}, true, now())`);
          const insertTrans = await connectDB.query(`INSERT INTO transaction (userid, amount, remaining, detail, createdon, isActive, walletid) 
            VALUES (${userid}, ${parseFloat(amount)}, ${remains}, '${data.name} Selected', now(), true, ${wallet})`);
          const insertROI = await connectDB.query(`INSERT INTO returninterest (userid, planname, payinterest, period, capitalback, invest, status, isActive) 
            VALUES (${userid}, '${data.name}', ${data.ratio}, '${data.days} days', ${capitalbck}, ${amount}, 'In Progress', true)`);
          const updateUser = await connectDB.query(`UPDATE usersinvest 
            SET ${wallet == constants.userWallets.deposit ? "depositwallet" : "interestwallet"} = ${remains} WHERE (userid = ${userid})`);
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.data = 'Plan choosen successfully';
          constants.apiResponse.msg = 'Plan choosen successfully';
        }
        else {
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.error = ermsg;
        }
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

module.exports = {
  postDeposit,
  postWithdraw,
  approveDeposit,
  approveWithdraw,
  joinplan,
}