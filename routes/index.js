// Express router
const express = require('express');
const router = express.Router();
// Importando el Controller
const proyectosController = require('../controllers/proyectosController');

//importar express-validator
const {body} = require('express-validator')

module.exports = function() {
    router.get('/', proyectosController.Proyecto);
    router.get('/nueva_publicacion',proyectosController.formularioCrear);
    router.post('/nueva_publicacion', body('titulo').not().isEmpty().trim().escape(),proyectosController.guardarDatosArticulo);
    return router;
}  