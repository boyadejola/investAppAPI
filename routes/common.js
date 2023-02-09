const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  postDeposit,
  postWithdraw,
  approveDeposit,
  approveWithdraw,
  joinplan,
} = require('../controllers/common')

router.route('/deposit').post(authenticateUser, postDeposit)
router.route('/withdraw').post(authenticateUser, postWithdraw)
router.route('/appdeposit').post(authenticateUser, approveDeposit)
router.route('/appwithdraw').post(authenticateUser, approveWithdraw)
router.route('/joinplan').post(authenticateUser, joinplan)

module.exports = router;