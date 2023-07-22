let mongoose = require('mongoose');
let validator = require('validator')
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
let authorSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'fullname is provinded'],
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
        required: [true, 'email is provinded'],
        validate: [validator.isEmail, 'must be email type'],
    },
    username: {
        type: String,
        require: [true, 'username is provinded'],
    },
    hashPassword: {
        type: String,
        required: [true, 'password is provinded'],
    },
    address: {
        type: String,
    },
    photo: {
        type: String,
        default: '/uploads/default.jpeg'
    },
    role: {
        type: String,
        enum: ['admin', 'editor', 'author', 'guest'],
        default: 'guest',
    },
    refreshToken: {
        Type: String,
    }
},{
    timestamps: true,
});
authorSchema.plugin( mongooseDelete ,{
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Author', authorSchema);
