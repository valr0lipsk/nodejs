const express = require('express');
const postsController = require('../controllers/posts');

const router = express.Router();

router.get('/posts', postsController.find);

router.get('/posts/:title', postsController.findOne);

module.exports = router