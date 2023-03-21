const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = 4500
const DATABASE_URI = 'mongodb://localhost:27017/todos'


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)

    mongoose
        .connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Successfully connected to mongodb')
            run()
        })
        .catch(e => console.error(e));
});


function run() {
    const Book = require('./models/mongoose/book-mongoose')

    const book = new Book({
        title: '{ type: String }',
        rank: '{ type: String clea}',
        imageUrl: '{ type: String }',
        wirter: '{ type: String }',
        publisher: '{ type: String }',
        summary: '{ type: String }'
    })


    book.save().then(() => console.log('Saved successfully'));

    Book.find({})
        .then(result => console.log(result))
        .catch(err => console.log(err))

}

