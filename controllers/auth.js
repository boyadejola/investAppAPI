const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');
const bcrypt = require("bcryptjs");
const data = require('../model/roles.json');
const moment = require('moment/moment');
const { constants } = require('../model/constants');

const register = async (req, res) => {
  constants.apiResponse.code = 0;
  constants.apiResponse.msg = '';
  constants.apiResponse.data = {};
  constants.apiResponse.error = '';
  const { email, password, firstName, lastName } = req.body;
  try {
    const role = data.player;
    if (!email || !firstName || !password) {
      return res.status(400).json("Please enter complete information")
    }

    const emailalreadyexist = await connectDB.query("select email from users where email = ?", [email]);
    if (emailalreadyexist.length > 0) {
      constants.apiResponse.data = 'Email already in use';
      constants.apiResponse.code = StatusCodes.CONFLICT;
      constants.apiResponse.error = 'Email already in use';
      constants.apiResponse.msg = 'Email already in use';
      return res.status(StatusCodes.CONFLICT).json(constants.apiResponse);
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const params = [
      firstName,
      lastName ? lastName : '',
      email,
      hashedPassword,
      role, // by default player
      true,
      // data.aliveplayer,
      new Date(),
    ];
    const user = await connectDB.query("insert into users (UserFirstName, UserLastName, email,password,roleid,isActive, createdOn) values (?,?,?,?,?,?,?)", params);
    // const result = await connectDB.query("select * from users where email = ?", [email]);
    res.status(StatusCodes.CREATED).json({ msg: "User has been created" });
  } catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_register';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const login = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(200).json({ error: 'Please provide email and password' })
    }
    const userDB = await connectDB.query("select * from users where email = ?", [email]);
    if (!userDB[0] || (userDB[0] && !userDB[0].isactive) || !userDB.length > 0) {
      return res.status(200).json({ error: !userDB[0] ? 'User not exist' : (userDB[0] && !userDB[0].isactive) ? 'User is not active' : 'There is no email' })
    }

    const isMatch = await bcrypt.compare(password, userDB[0].password);
    if (!isMatch) {
      return res.status(200).json({ error: 'Incorrect Password' })
    }
    const tokenUser = createTokenUser(userDB);
    attachCookiesToResponse({ res, user: tokenUser });
    const user = {
      userId: userDB[0].userid,
      role: userDB[0].roleid,
      firstName: userDB[0].userfirstname,
      lastName: userDB[0].userlastname,
      // isAlive: userDB[0].statusid,
      email: userDB[0].email,
    }
    res.status(StatusCodes.OK).json({ user });
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_login';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const logout = async (req, res) => {
  constants.apiResponse.code = 0;
  constants.apiResponse.msg = '';
  constants.apiResponse.data = {};
  constants.apiResponse.error = '';
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
}

const updatePassword = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    if (req.user.userid) {
      const { oldpassword, newpassword } = req.body;
      if (!oldpassword || !newpassword) {
        constants.apiResponse.code = StatusCodes.BAD_REQUEST;
        constants.apiResponse.error = 'Please provide email and password';
        constants.apiResponse.msg = 'Please provide email and password';
        constants.apiResponse.data = 'Please provide email and password';
        return res.status(StatusCodes.BAD_REQUEST).json(constants.apiResponse);
      }

      const user = await connectDB.query("select * from users where userid = ?", [req.user.userid]);
      const isMatch = await bcrypt.compare(oldpassword, user[0].password);
      // //   return isMatch;
      if (!isMatch) {
        constants.apiResponse.code = StatusCodes.CONFLICT;
        constants.apiResponse.error = 'Incorrect Password';
        constants.apiResponse.msg = 'Incorrect Password';
        constants.apiResponse.data = 'Incorrect Password';
        return res.status(StatusCodes.CONFLICT).json(constants.apiResponse);
      }

      let hashedPassword = await bcrypt.hash(newpassword, 8);
      const result = await connectDB.query("update users set password = ? where userid = ?", [hashedPassword, req.user.userid]);
      constants.apiResponse.code = StatusCodes.OK;
      constants.apiResponse.msg = 'Password Changed';
      res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  } catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_updatePassword';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

module.exports = { register, login, logout, updatePassword }