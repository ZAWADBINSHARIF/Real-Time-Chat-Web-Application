// external Imports
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const DecorateHtmlResponse = require('../middleware/common/DecorateHtmlResponse')

router.get('/', new DecorateHtmlResponse('Index'), indexController.getIndex);

module.exports = router;