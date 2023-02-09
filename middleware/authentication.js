const CustomError = require('../errors');
const { isTokenValid } = require('../utils');
const { StatusCodes } = require('http-status-codes');
const { constants } = require('../model/constants');
const roleData = require('../model/roles.json');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json('Authentication Invalid')
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }

  try {
    const { firstname, userid, roleid, email, lastname } = isTokenValid({ token });
    req.user = { firstname, userid, roleid, email, lastname };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const authorizePermissions = (...roles) => {

  return (req, res, next) => {
    // console.log(`check check -> ${(req)}, --> -->`)
    if (!roles.includes("admin")) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      );
    }
    next();
  };
};

function checkDeleteAuthority(roleid, toverify) {
  if (toverify == constants.toVerify.superadmin || toverify == constants.toVerify.admin) {
    if (roleid == roleData.super_admin) return true
    else return false;
  }
  else if (toverify == constants.toVerify.manager) {
    if (roleid == roleData.super_admin || roleid == roleData.admin) return true
    else return false;
  }
  else if (toverify == constants.toVerify.player) {
    if (roleid == roleData.super_admin || roleid == roleData.admin) return true
    else return false;
  }
  else if (toverify == constants.toVerify.league) {
    if (roleid == roleData.super_admin || roleid == roleData.admin || roleid == roleData.manager) return true
    else return false;
  }
  else if (toverify == constants.toVerify.userleagues) {
    if (roleid == roleData.super_admin || roleid == roleData.admin || roleid == roleData.manager) return true
    else return false;
  }
  return false;
}

function randomString() {
  const length = 16;
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function extractTeams(picksData, e, week, uniquePicks) {
  let result = [];
  if (picksData && e && uniquePicks && uniquePicks.length > 0) {
    uniquePicks.map(zx => {
      if (picksData.filter(xx => xx.userpickid == zx && xx.userid == e && xx.weekno == week).length > 0) {
        let obj = {
          teamid: picksData.filter(xx => xx.userpickid == zx && xx.userid == e && xx.weekno == week)[0].teamid,
          iswin: picksData.filter(xx => xx.userpickid == zx && xx.userid == e && xx.weekno == week)[0].result,
          inprogress: picksData.filter(xx => xx.userpickid == zx && xx.userid == e && xx.weekno == week)[0].inprogress,
        }
        result.push(obj);
      }
    });
  }
  return result;
}

function isEmptyObject(obj) {
  if (obj != undefined) {
    return !Object.keys(obj).length;
  }
}

function calculateCapitalBack(plan, amount) {
  let result = 0;
  if (plan && !isEmptyObject(plan) && amount && amount > 0) {
    const ratio = plan.ratio ? plan.ratio / 100 : 0;
    result = amount * ratio;
  }
  return result;
}

module.exports = {
  authenticateUser,
  authorizePermissions,
  randomString,
  checkDeleteAuthority,
  extractTeams,
  isEmptyObject,
  calculateCapitalBack,
};
