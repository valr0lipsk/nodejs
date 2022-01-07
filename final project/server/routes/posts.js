const express = require('express');

const router = express.Router();

const postsController = require('../controllers/posts');

//get all 
router.get('/posts', (req, res) => {
    postsController.find(req,res)
});

//create new 
router.post('/posts', postsController.create);

//find one
router.get('/posts/:_id', (req, res) => {
    postsController.findOne(req,res)
});

//delete one
router.delete('/posts/:_id', postsController.remove);

//update one
router.put('/posts/:_id', postsController.update);

module.exports = router