const express = require('express');
const router = express.Router();
// const {
//   authenticateUser,
//   authorizePermissions,
// } = require('../middleware/authentication');

const { test } = require('../controllers/test')

router
  .route('/test')
  .get(test)

module.exports = router;
