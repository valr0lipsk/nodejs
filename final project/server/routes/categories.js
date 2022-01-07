const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categories');

//get all 
router.get('/categories', categoriesController.find);

//create new 
router.post('/categories', categoriesController.create);

//find one
router.get('/categories/:name', categoriesController.findOne);

//delete one
router.delete('/categories/:name', categoriesController.remove);

//update one
router.put('/categories/:name', categoriesController.update);

module.exports = router