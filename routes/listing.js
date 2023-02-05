const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
    withdrawHistory, depositHistory, referralStatistic, transactionHistory, returnInterestLog
} = require('../controllers/listing')

router.route('/withdrawhistory').get(authenticateUser, withdrawHistory)
router.route('/deposithistory').get(authenticateUser, depositHistory)
router.route('/referralstatistic').get(authenticateUser, referralStatistic)
router.route('/transactionhistory').get(authenticateUser, transactionHistory)
router.route('/returninterestlog').get(authenticateUser,returnInterestLog)


module.exports = router;
