// external imports
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');
const DecorateHtmlResponse = require('../middleware/common/DecorateHtmlResponse')

router.get('/', new DecorateHtmlResponse('Login'), loginController.getLogin);

module.exports = router;