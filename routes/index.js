// Express router
const express = require('express');
const router = express.Router();
// Importando el Controller
const proyectosController = require('../controllers/proyectosController');

//importar express-validator
const {body} = require('express-validator')

module.exports = function() {
    router.get('/',proyectosController.Proyecto);
    router.get('/nueva_publicacion',proyectosController.formularioCrear);
    router.post('/nueva_publicacion',proyectosController.guardarDatosArticulo);

    // Eliminar una tarea
    router.delete('/eliminar_publicacion/:id',proyectosController.eliminarProyecto);

    // Mostrar artículos por categoría
    router.get('/contaminacion', proyectosController.categoriaContaminacion);
    router.get('/ecologia', proyectosController.categoriaEcologia);
    router.get('/biodiversidad', proyectosController.categoriaBiodiversidad);

    return router;
}  