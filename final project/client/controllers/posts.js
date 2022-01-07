// const post = require("../models/post");
const { getDb } = require('../utils/dbConnect');

module.exports = class PostsController{
    static find (req, res) {
        const db = getDb();
        db
            .collection('posts')
            .find()
            .toArray()
            .then((posts) => {
                res.render('home', { posts })
            })
            .catch((error) => {
                res.status(400).render('error')
            })
    }

    static findOne (req, res) {
        const db = getDb();
        db
            .collection('posts')
            .findOne({title: req.params.title})
            .then((post) => {
                if (post){
                    res.render('post', { post })
                }
                else{
                        res.status(400).render('error', { 
                            layout: 'error',
                            error: 'Not Found'
                        })
                }
            })
            .catch((error) => {
                res.status(400).render('error')
            })
    }
}