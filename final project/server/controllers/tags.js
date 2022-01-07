const tag = require('../models/tag');

module.exports = class TagsController {
    static create (req, res) {
        const newTag = new tag(req.body)
        newTag
            .save()
            .then((tag) => {
                res.status(201).json(tag)
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static find (req, res) {
        tag
        .find()
        .then((tags) => {
            res.json(tags)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne (req, res) {
            tag
            .findOne({name: req.params.name}).exec()
            .then((tag) => {
                if (tag) {
                    res.json(tag)
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

    static remove (req, res) {
        tag
        .findOne({name: req.params.name}).exec()
        .then((tag) => {
            if (tag) {
                tag
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
        tag
            .updateOne({name: req.params.name}, {name: 'updated name'})
        // .findOne({name: req.params.name}).exec()
        .then((tag) => {
            // if (tag) {
            //     tag.updateOne({name: 'name'}, {body: 'new data'});
                res.status(201).json({ message: 'success' })
            // }
            // else {
            //     res.status(400).json({error: `The tag with name ${req.params.name} does not exists`})
            // }
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })  
    }
}