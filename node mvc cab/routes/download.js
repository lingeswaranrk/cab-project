const express = require('express');
const app = require('../controller/downloadController');
const router =express.Router()

router.get('/download/:id',app.download);
router.get('/paynow/:id',app.payNow);

module.exports = router;