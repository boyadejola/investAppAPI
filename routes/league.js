const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  createleague,
  getleague,
  getMyLeagues,
  getLeaguePlayers,
  joinleague,
  createEditLeague,
  getAllTeams,
  getMyJoinedLeagues,
} = require('../controllers/league')

router.route('/league').post(authenticateUser, createleague)
router.route('/league').get(authenticateUser, getleague)
router.route('/myleague').get(authenticateUser, getMyLeagues)
router.route('/league/players/:id').get(authenticateUser, getLeaguePlayers)
router.route('/league/join').post(authenticateUser, joinleague)
router.route('/league/create').post(authenticateUser, createEditLeague)
router.route('/league/joinedleagues').get(authenticateUser, getMyJoinedLeagues)
router.route('/league/teams').get(getAllTeams)

module.exports = router;
