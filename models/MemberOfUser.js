const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trime: true
        },
        email: {
            type: String,
            require: true,
            trime: true,
            lowercase: true
        },
        mobile: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        avator: {
            type: String
        },
        roles: {
            type: String,
            enum: ['admin', 'user'],
            default: "user"
        }

    }
);

module.exports = mongoose.Model('memberOfUser', UserSchema);