const express = require('express');

const router = express.Router();

const authorsController = require('../controllers/authors');

//get all 
router.get('/authors', authorsController.find);

//create new 
router.post('/authors', authorsController.create);

//find one
router.get('/authors/:name', authorsController.findOne);

//delete one
router.delete('/authors/:name', authorsController.remove);

//update one
router.put('/authors/:name', authorsController.update);

module.exports = router