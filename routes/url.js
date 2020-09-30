const express = require('express');

const router = express.Router();
const urlcontroller = require('../controller/url');

router.post('/shorturl', urlcontroller.shortUrl);
router.get('/:codeUrl', urlcontroller.generate);
module.exports = router;
