const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const bcrypt = require("bcryptjs");
const { randomString } = require('../middleware/authentication');
const { constants } = require('../model/constants');
const data = require('../model/roles.json');

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
            withdrawHistory = await connectDB.query(`select * from withdraw where isActive = true order by withdrawid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
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
            depositHistory = await connectDB.query(`select * from deposit where isActive = true order by depositid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
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
    // res.send('withdraw history')
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
            transactionHistory = await connectDB.query(`select * from transaction where isActive = true order by transactionid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
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
            referralStatistic = await connectDB.query(`select * from referrals where isActive = true order by referralid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
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
            returnInterestLog = await connectDB.query(`select * from returninterest where isActive = true order by returninterestid desc limit ${limit}`);
        }
        constants.apiResponse.code = StatusCodes.OK;
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


module.exports = {
    withdrawHistory, depositHistory, referralStatistic, transactionHistory, returnInterestLog
}
