'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let categoriaRoutes = require('./routes/categoria');
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', categoriaRoutes);
// exportar
module.exports = app;
