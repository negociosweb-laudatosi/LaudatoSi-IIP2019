// Express router
const express = require('express');
const router = express.Router();

// Importando el Controller
const proyectosController = require
('../controllers/proyectosController');

module.exports = function() {
    

    router.get('/', proyectosController.Proyecto);
    router.get('/nuevo_articulo',proyectosController.formularioCrear);
    router.get('/articulo',proyectosController.crearArticulo);
    return router;
} 