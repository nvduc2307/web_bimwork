const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, '']
    },
    description: {
        type: String,
        required: [true, '']
    },
    image: {
        type: String,
        required: [true, '']
    },
    staffId: {
        type: Schema.Types.ObjectId,
        req: 'Staff',
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
},{
    timestamps: true
});
module.exports = mongoose.model('Project', projectSchema);