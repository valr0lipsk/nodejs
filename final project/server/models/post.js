const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true},
    body: { type: String, required: true },
    excerpt: String, 
    categories: {
        type: [mongoose.Types.ObjectId],
        ref: 'Category',
        required: true,
    },
    tags: {
        type: [mongoose.Types.ObjectId],
        ref: 'Tag',
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Post', schema);