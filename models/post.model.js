const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The post must have title']
    },
    expert: {
        type: String,
    },
    tags: {
        type: [],
    },
    feature: {
        type: String,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
    },
    type: {
        type: String,
        enum: ['Project', 'Article']
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    },
    url: {
        type: String,
    },
    body: {
        type: String,
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Post', postSchema);
