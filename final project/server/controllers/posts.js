const post = require("../models/post");
const posts = [];

module.exports = class PostController {
    static find (req, res) {
        post
        .find().lean()
        .populate('author')
        .populate('tags')
        .populate('categories')
        .then((posts) => {
            // res.render('home',{posts})
            res.status(200).json(posts)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne (req, res) {
            post
            .findOne({_id: req.params._id}).lean()
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
            .then((post) => {
                if (post) {
                    // res.render('post',{post})
                    res.status(200).json(post)
                }
                else{
                    // res.status(400).render('error', { 
                    //     layout: 'error',
                    //     error: 'Not Found',
                    // })
                    res.status(400).json({error: error.message})
                }
                
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static create (req, res) {
        const newPost = new post(req.body)
        newPost
            .save()
            .then((post) => {
                res.status(200).json(post)
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static remove (req, res) {
        post
        .findOne({_id: req.params._id}).exec()
        .then((post) => {
            if (post) {
                post
                    .deleteOne({_id: req.params._id})
                res.status(200).json({message: 'success'});
            }
            else{
                // res.status(400).render('error', { 
                //     layout: 'error',
                //     error: 'Not Found',
                // })
                res.status(400).json({ error: error.message })
            }
            
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    //TODO: check if post exists
    static update (req, res) {
        post 
        .findOneAndUpdate({title: req.params.title}, {$set: {body: 'new data'}})
        .then((post) => {
            if (post) {
                res.status(200).json({message: 'success'})
            }
            else{
                // res.status(400).render('error', { 
                //     layout: 'error',
                //     error: 'Not Found',
                // })
                res.status(400).json({ error: error.message })
            }
        })
        .catch((error) => {
            res.status(400).json({error: error.message})
        })
    }
}