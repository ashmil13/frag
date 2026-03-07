const express = require('express');

const { getFrag, addCategory, deleteCategory } = require('../controllers/fragController.js');




const router = express.Router();




router.get('/', getFrag);

router.post('/', addCategory);

router.delete('/:id', deleteCategory);


module.exports = router;