const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email must be unique'],
        minLength: [5, 'Email must have at least 5 characters'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password must be provided'],
        select: false,
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCodeValidation: {
        type: Number,
        select: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false,
    },
    forgotPasswordValidation: {
        type: Number,
        select: false,
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)