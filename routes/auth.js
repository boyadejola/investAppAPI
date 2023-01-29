const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const { login, register, logout, updatePassword } = require('../controllers/auth')

router.route('/register').post(register)

router.route('/login').post(login)

router.route('/logout').get(logout)

router.route('/updatePassword').patch(authenticateUser, updatePassword)

// router.route('/getPlayers').get(authenticateUser, getPlayers)



module.exports = router;