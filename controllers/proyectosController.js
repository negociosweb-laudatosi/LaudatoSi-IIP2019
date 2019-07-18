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
    //verificamos que se traigan valores del formulario
    var elTitulo = req.body.elContenido
    //const {tinymce} = params.tinymce
    //arreglo para los errores
    let errores = [];
    //verificando
    if(!elTitulo){
        errores.push({'texto':'No puedes guardar un articulo vacío'});
    }
    if(errores.length>0){
        res.render('editor',{
        errores
    });
    }else{
        //guardamos los datos en la base de datos
        console.log(elTitulo)
        //await Proyecto.create({tinymce});

        // Redirigir hacia la ruta principal
        res.redirect('/');
    }
   

}
