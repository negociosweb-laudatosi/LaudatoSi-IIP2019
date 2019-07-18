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

exports.guardarDatosArticulo = async (req,res)=>{
    console.log("ya entró");
    let errores = [];
    //verificando
    
    const {titulo,categoria,contenido}= req.body;
    console.log(req.body);
    console.log("----------------------------");
    console.log(req.body.contenido)
    await Proyecto.create({
        categoria,
        titulo,
        contenido
    })

   

}
