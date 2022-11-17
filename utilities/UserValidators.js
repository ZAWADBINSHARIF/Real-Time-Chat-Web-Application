const { check, validationResult } = require('express-validator');
const createError = require('http-errors');
const path = require('path');
const { unlink } = require('fs');

class UserValidator {
    
        constructor() {

        this.addUserValidator = [
            check('name')
                .isLength({ min: 1 })
                .withMessage('Name is required')
                .isAlpha('en-US', { ignore: " -" })
                .withMessage('Name must be required only alphabet')
                .trim(),
            check('email')
                .isEmail()
                .withMessage('Required valid Email address')
                .trim()
                .custom(async value => {
                    try {
                        const user = await user.fineOne({ email: value });
                        if (user) {
                            throw createError('Email already is used!!');
                        }
                    } catch (err) {
                        throw createError(err.message);
                    }
                }),
            check('mobile')
                .isMobilePhone('bn-BD', { strictMode: true })
                .custom(async value => {
                    try {
                        const user = await user.fineOne({ mobile: value });
                        if (user) {
                            throw createError('Mobile number already is used!!');
                        }
                    } catch (err) {
                        throw createError(err.message);
                    }
                }),
            check('password')
                .isStrongPassword()
                .withMessage('Password must be at least 8 charecters long & should contain at least 1 lowercase 1 uppercase, 1 number & symbol')
        ]

        this.userValidationHandler = function (req, res, next) {
            const errors = validationResult(req).mapped();
            console.log(validationResult(req));
            console.log(errors);

            if (Object.keys(mappedErrors).length === 0) {
                next();
            } else {
                if (req.files.length > 0) {
                    const fileName = req.files[0];

                    unlink(
                        path.join(__dirname, `/../public/uploads/avatars/${fileName}`),
                        err => {
                            if (err)
                                throw conlose.log(err);
                        }
                    );

                }
            }

            // response the error
            res.status(500).json({ errors: errors });
        }

    }
}

module.exports = UserValidator
