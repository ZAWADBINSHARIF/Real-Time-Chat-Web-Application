// external Imports
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const DecorateHtmlResponse = require('../middleware/common/DecorateHtmlResponse');
const avatarUpload = require('../middleware/common/users/AvatarUpload');
const UserValidator = require('../utilities/userValidators');

// get users page
router.get('/', new DecorateHtmlResponse('Users'), usersController.getUsers);
// add user
router.post('/', avatarUpload, new UserValidator().addUserValidator, new UserValidator().userValidationHandler);

module.exports = router;