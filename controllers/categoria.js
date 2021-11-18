'use strict';
let Categoria = require('../models/categoria');
let controller = {
  save(req, res) {
    let params = req.body;
    let categoria = new Categoria();
    categoria.nombre = params.nombre;
    
    categoria.save((err, categoriaStored) => {
      if (err) return res.status(500).send({ message: 'Error al guardar el categoria' });
      if (!categoriaStored) return res.status(404).send({ message: 'No se ha guardado el categoria' });
      return res.status(200).send({ categoria: categoriaStored });
    });
  },
  get(req, res){
		let categoriaId = req.params.id;

		if(categoriaId == null) return res.status(404).send({message: 'El categoria no existe.'});

		Categoria.findById(categoriaId, (err, categoria) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!categoria) return res.status(404).send({message: 'El categoria no existe.'});

			return res.status(200).send({
				categoria
			});

		});
	},

	getAll(req, res){

		Categoria.find({}).sort('-year').exec((err, categorias) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!categorias) return res.status(404).send({message: 'No hay categorias que mostrar.'});

			return res.status(200).send({categorias});
		});

	},

	update(req, res){
		let categoriaId = req.params.id;
		let update = req.body;

		Categoria.findByIdAndUpdate(categoriaId, update, {new:true}, (err, categoriaUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!categoriaUpdated) return res.status(404).send({message: 'No existe el categoria para actualizar'});

			return res.status(200).send({
				categoria: categoriaUpdated
			});
		});

	},

	delete(req, res){
		let categoriaId = req.params.id;

		Categoria.findByIdAndRemove(categoriaId, (err, categoriaRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el categoria'});

			if(!categoriaRemoved) return res.status(404).send({message: "No se puede eliminar ese categoria."});

			return res.status(200).send({
				categoria: categoriaRemoved
			});
		});
	},
	uploadImage(req, res){
		
	}

};

module.exports = controller;
