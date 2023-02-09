const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const bcrypt = require("bcryptjs");
const { randomString } = require('../middleware/authentication');
const { constants } = require('../model/constants');
const roles = require('../model/roles.json');

const withdrawHistory = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let withdrawHistory = [];
        if (userid) {
            withdrawHistory = await connectDB.query(`select * from withdraw where isActive = true and userid = ${userid} and isapproved=true order by withdrawid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = withdrawHistory && withdrawHistory.length > 0 ? withdrawHistory.length : 0;
        constants.apiResponse.data = withdrawHistory && withdrawHistory.length > 0 ? withdrawHistory : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_withdrawHistory';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const depositHistory = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let depositHistory = [];
        if (userid) {
            depositHistory = await connectDB.query(`select * from deposit where isActive = true and userid = ${userid} and isapproved=true order by depositid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = depositHistory && depositHistory.length > 0 ? depositHistory.length : 0;
        constants.apiResponse.data = depositHistory && depositHistory.length > 0 ? depositHistory : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_depositHistory';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const transactionHistory = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let transactionHistory = []
        if (userid) {
            transactionHistory = await connectDB.query(`select * from transaction where isActive = true and userid = ${userid} order by transactionid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = transactionHistory && transactionHistory.length > 0 ? transactionHistory.length : 0;
        constants.apiResponse.data = transactionHistory && transactionHistory.length > 0 ? transactionHistory : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_transactionHistory';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const referralStatistic = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let referralStatistic = []
        if (userid) {
            referralStatistic = await connectDB.query(`select * from referrals where isActive = true and userid = ${userid} and isapproved=true order by referralid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = referralStatistic && referralStatistic.length > 0 ? referralStatistic.length : 0;
        constants.apiResponse.data = referralStatistic && referralStatistic.length > 0 ? referralStatistic : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_referralStatistic';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const returnInterestLog = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let returnInterestLog = []
        if (userid) {
            returnInterestLog = await connectDB.query(`select * from returninterest where isActive = true and userid = ${userid} order by returninterestid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = returnInterestLog && returnInterestLog.length > 0 ? returnInterestLog.length : 0;
        constants.apiResponse.data = returnInterestLog && returnInterestLog.length > 0 ? returnInterestLog : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_returnInterestLog';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const depostToApprove = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const role = req.user && req.user.roleid ? req.user.roleid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let depositHistory = []
        if (userid && role && (role == roles.super_admin || role == roles.admin)) {
            depositHistory = await connectDB.query(`select d.*, u.firstname, u.lastname from deposit d inner join users u on u.userid = d.userid where d.isActive = true and d.isapproved=false order by d.depositid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = depositHistory && depositHistory.length > 0 ? depositHistory.length : 0;
        constants.apiResponse.data = depositHistory && depositHistory.length > 0 ? depositHistory : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_depostToApprove';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const withdrawToApprove = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        const role = req.user && req.user.roleid ? req.user.roleid : 0;
        const { pageno, count } = req.query;
        const numPerPage = Number(count) || 10;
        const page = Number(pageno) || 1;
        const skip = (page - 1) * numPerPage;
        const limit = skip + ',' + numPerPage;
        let depositHistory = []
        if (userid && role && (role == roles.super_admin || role == roles.admin)) {
            depositHistory = await connectDB.query(`select w.*, u.firstname, u.lastname from withdraw w inner join users u on u.userid = w.userid where w.isActive = true and w.isapproved=false order by w.withdrawid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.totalCount = depositHistory && depositHistory.length > 0 ? depositHistory.length : 0;
        constants.apiResponse.data = depositHistory && depositHistory.length > 0 ? depositHistory : [];
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_withdrawToApprove';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

const getDashboard = async (req, res) => {
    try {
        constants.apiResponse.code = 0;
        constants.apiResponse.msg = '';
        constants.apiResponse.data = {};
        constants.apiResponse.error = '';
        const userid = req.user && req.user.userid ? req.user.userid : 0;
        // const role = req.user && req.user.roleid ? req.user.roleid : 0;
        let dashboard = {
            depositwallet: 0,
            activewallet: 0,
            interestwallet: 0,
            totaltrades: 0,
            totaldeposit: 0,
            totalpayout: 0,
        };
        if (userid) {
            const user = await connectDB.query(`select * from users where userid = ${userid}`);
            if (user && user.length > 0) {
                dashboard.depositwallet = user[0].depositwallet;
                dashboard.activewallet = user[0].activewallet;
                dashboard.interestwallet = user[0].interestwallet;
            }
            const userpicks = await connectDB.query(`select * from userplans where userid = ${userid}`);
            if (userpicks && userpicks.length > 0) {
                dashboard.totaltrades = userpicks.length;
            }
            const deposit = await connectDB.query(`select * from deposit where userid = ${userid} and isapproved=true and isactive=true`);
            if (deposit && deposit.length > 0) {
                deposit.map(a => {
                    dashboard.totaldeposit += parseFloat(a.amount);
                });
            }
            const withdraw = await connectDB.query(`select * from withdraw where userid = ${userid} and isapproved=true and isactive=true`);
            if (withdraw && withdraw.length > 0) {
                withdraw.map(a => {
                    dashboard.totalpayout += parseFloat(a.amount);
                });
            }
        }
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = dashboard;
        return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    catch (err) {
        constants.apiResponse.data = 'Server error, check connections';
        constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
        constants.apiResponse.error = err;
        constants.apiResponse.msg = 'api_withdrawToApprove';
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
    }
}

module.exports = {
    withdrawHistory,
    depositHistory,
    referralStatistic,
    transactionHistory,
    returnInterestLog,
    depostToApprove,
    withdrawToApprove,
    getDashboard,
}
