const author = require("../models/author");

module.exports = class AuthorController {
    static find (req, res) {
        author
        .find()
        .then((authors) => {
            res.json(authors)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne (req, res) {
            author
            .findOne({name: req.params.name}).exec()
            .then((author) => {
                if (author) {
                    res.json(author)
                }
                else{
                    res.status(400).render('error', { 
                        layout: 'error',
                        error: 'Not Found',
                    })
                }
                
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static create (req, res) {
        const newauthor = new author(req.body)
        newauthor
            .save()
            .then((author) => {
                res.status(201).json(author)
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static remove (req, res) {
        author
        .findOne({name: req.params.name}).exec()
        .then((author) => {
            if (author) {
                author
                    .deleteOne({name: req.params.name})
                res.status(201).json({message: 'success'});
            }
            else{
                res.status(400).render('error', { 
                    layout: 'error',
                    error: 'Not Found',
                })
            }
            
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static update (req, res) {
        author
            .updateOne({name: req.params.name}, {email: 'updatedemail@email.com'})
        // .findOne({name: req.params.name}).exec()
        .then((author) => {
            // if (author) {
            //     author.updateOne({name: 'name'}, {body: 'new data'});
                res.status(201).json({ message: 'success' })
            // }
            // else {
            //     res.status(400).json({error: `The author with name ${req.params.name} does not exists`})
            // }
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })  
    }
}