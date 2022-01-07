const express = require('express');

const router = express.Router();

const tagsController = require('../controllers/tags');


router.post('/tags', tagsController.create);

router.get('/tags', tagsController.find);

router.get('/tags/:name', tagsController.findOne);

router.delete('/tags/:name', tagsController.remove);

router.put('/tags/:name', tagsController.update);

module.exports = router