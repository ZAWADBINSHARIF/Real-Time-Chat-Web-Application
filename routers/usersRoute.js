// external Imports
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const DecorateHtmlResponse = require('../middleware/common/DecorateHtmlResponse')

router.get('/', new DecorateHtmlResponse('Users'), usersController.getUsers);


module.exports = router;