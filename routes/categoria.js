'use strict'
let express = require('express')
let CategoriaController = require('../controllers/categoria');
let router = express.Router();

router.get('/categorias', CategoriaController.getAll);
router.get('/categoria/:id?', CategoriaController.get);
router.post('/categoria/save', CategoriaController.save);
router.patch('/categoria/:id', CategoriaController.update);
router.delete('/categoria/:id', CategoriaController.delete);

module.exports = router;