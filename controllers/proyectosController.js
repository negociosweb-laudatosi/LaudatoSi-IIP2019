// importar los modelos a utilizar
const Proyecto = require('../models/Proyecto');
const Usuario = require('../models/Usuario');
const Categoria = require('../models/Categoria');

exports.Proyecto = async(req,res)=>{
    //TODO cargar todos los articulos y comentarios
    
    const losProyectos =await Proyecto.findAll();
    res.render('index',{
        losProyectos

    });
    
};

// cargamos la plantilla para cargar la nueva publicaciones

exports.formularioCrear = async(req,res)=>{
    res.render('editor');
};

exports.crearArticulo = async(req,res)=>{
    res.render('articulo');
}