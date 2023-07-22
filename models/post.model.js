const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The post must have title']
    },
    description: {
        type: String,
        required: [true]
    },
    tags: {
        type: [
            {type: Schema.Types.ObjectId, ref: 'Tag'}
        ],
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    },
    image: {
        type: String,
        required: [true]
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Post', postSchema);
