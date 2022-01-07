const category = require('../models/category');

module.exports = class CategoriesController {
    static create (req, res) {
        const newCategory = new category(req.body)
        newCategory
            .save()
            .then((category) => {
                res.status(201).json(category)
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static find (req, res) {
        category
        .find()
        .then((categories) => {
            res.json(categories)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne (req, res) {
            category
            .findOne({name: req.params.name}).exec()
            .then((category) => {
                if (category) {
                    res.json(category)
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
        category
        .findOne({name: req.params.name}).exec()
        .then((category) => {
            if (category) {
                category
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
        category
            .updateOne({name: req.params.name}, {excerpt: 'updated excerpt'})
        // .findOne({name: req.params.name}).exec()
        .then((category) => {
            // if (category) {
            //     category.updateOne({name: 'name'}, {body: 'new data'});
                res.status(201).json({ message: 'success' })
            // }
            // else {
            //     res.status(400).json({error: `The category with name ${req.params.name} does not exists`})
            // }
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })  
    }
}