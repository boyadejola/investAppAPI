const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  withdrawHistory,
  depositHistory,
  referralStatistic,
  transactionHistory,
  returnInterestLog,
  depostToApprove,
  withdrawToApprove,
  getDashboard,
} = require('../controllers/listing')

router.route('/withdraw').get(authenticateUser, withdrawHistory)
router.route('/deposit').get(authenticateUser, depositHistory)
router.route('/referral').get(authenticateUser, referralStatistic)
router.route('/transaction').get(authenticateUser, transactionHistory)
router.route('/returninterest').get(authenticateUser, returnInterestLog)
router.route('/toapprove').get(authenticateUser, depostToApprove)
router.route('/withapprove').get(authenticateUser, withdrawToApprove)
router.route('/dashboard').get(authenticateUser, getDashboard)

module.exports = router;