const express = require('express');
const router = express.Router();
const urlcontroller = require('../controller/url');

router.post('/', urlcontroller.shortUrl);
router.get('/:shortUrl', urlcontroller.generate);
module.exports = router;
