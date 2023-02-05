const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
    withdrawHistory, depositHistory, referralStatistic, transactionHistory, returnInterestLog
} = require('../controllers/listing')

router.route('/withdrawhistory').get(withdrawHistory)
router.route('/deposithistory').get(depositHistory)
router.route('/referralstatistic').get(referralStatistic)
router.route('/transactionhistory').get(transactionHistory)
router.route('/returninterestlog').get(returnInterestLog)


module.exports = router;
