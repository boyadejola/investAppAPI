const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const { getUsers, getPlayers, getSpecificUser, updateSpecificUser, deleteZombData } = require('../controllers/users')

router.route('/users').get(authenticateUser, getUsers)
router.route('/players').get(authenticateUser, getPlayers)
router.route('/specuser/:id').get(authenticateUser, getSpecificUser)
router.route('/updateuser').post(authenticateUser, updateSpecificUser)
router.route('/deletezomb').post(authenticateUser, deleteZombData)

module.exports = router;
