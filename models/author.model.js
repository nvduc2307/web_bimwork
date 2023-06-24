let mongoose = require('mongoose');
let validator = require('validator')

let authorSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: [true, 'fullname is provinded'],
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male',
    },
    email: {
        type: String,
        require: [true, 'email is provinded'],
        validate: [validator.isEmail, 'must be email type'],
    },
    username: {
        type: String,
        require: [true, 'username is provinded'],
    },
    hashPassword: {
        type: String,
        require: [true, 'password is provinded'],
    },
    address: {
        type: String,
    },
    photo: {
        type: String,
        default: '/uploads/default.jpg'
    },
    role: {
        type: String,
        enum: ['admin', 'editor', 'author', 'guest'],
        default: 'guest',
    },
    refreshToken: {
        Type: String,
    }
});
module.exports = mongoose.model('Author', authorSchema);
