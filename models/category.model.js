const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: {
        type: String,
        require: [true, 'Category must have name'],
    },
},{timestamps: true});
module.exports = mongoose.model('Category', categorySchema);
