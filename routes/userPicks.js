const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const { 
  getUserPicks, 
  insertUserPick, 
  getLeagueScoreboard, 
  getStatsCheck, 
  postStatsService,
  updatePicksDataService,
} = require('../controllers/userPicks')

router.route('/userpick/getuserpick').get(authenticateUser, getUserPicks)
router.route('/userpick/choosepick').post(authenticateUser, insertUserPick)
router.route('/userpick/dashboard').get(authenticateUser, getLeagueScoreboard)
router.route('/userpick/statscheck').get(authenticateUser, getStatsCheck)
router.route('/userpick/servicestats').post(authenticateUser, postStatsService)
router.route('/userpick/servicestats').post(authenticateUser, postStatsService)
router.route('/userpick/updatepickstats').post(authenticateUser, updatePicksDataService)

module.exports = router;