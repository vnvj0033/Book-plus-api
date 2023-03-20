const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: { type: String },
        rank: { type: String },
        imageUrl: { type: String },
        wirter: { type: String },
        publisher: { type: String },
        summary: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Book', bookSchema);