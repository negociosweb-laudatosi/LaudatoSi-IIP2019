// importar los modelos a utilizar
const Proyecto = require('../models/Proyecto');
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
    
    const {titulo,categoria,contenido, usuario}= req.body;
    
    //vamos a capturar la fecha de posteo
    let f = new Date();
    let ultimaModificacion= (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + f.getHours()+":"+f.getMinutes()) ;
    await Proyecto.create({
        categoria,
        titulo,
        contenido,
        ultimaModificacion,
        usuario
    })

    res.redirect('/');

}

// Seleccionamos el articulo segun su URL
exports.articuloURL = async (req, res, next) => {
    const proyectosPromise = Proyecto.findAll();

    const proyectoPromise = Proyecto.findOne({
        where : {
            url : req.params.url
        }
    });

    // Promise con destructuring
    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);


    // Verificar si se obtiene un atículo en la consulta
    if (!proyecto) return next();

    // Mostrar la vista
    res.render('editor', {
        proyectos,
        proyecto
    })

}

// Modificando/editando artículo
exports.formularioEditar = async (req, res) => {
    // Obtener todos los modelos
    console.log(req.params.id)
    const proyectosPromise = Proyecto.findAll();

    // Obtener el artículo a editar
    const proyectoPromise = Proyecto.findOne({
        where : {
            id : req.params.id
        }
    });

    // Promise con destructuring
    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

    res.render('editor', {
        proyectos,
        proyecto
    })
};


// Actualizar Artículo
exports.actualizarArticulo = async (req, res, next) => {


    //obtener todos los artículos
    const proyectos = await Proyecto.findAll();

    const {
        titulo, 
        categoria,  
        usuario,
        contenido
    }=req.body;

    let f = new Date();
    let ultimaModificacion= (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + f.getHours()+":"+f.getMinutes()) ;

    await Proyecto.update({
        titulo, 
        categoria,  
        usuario,
        contenido,
        ultimaModificacion
    },{where : {
            id : req.params.id
        }});
}



//Eliminando tarea
exports.eliminarProyecto = async (req, res, next) => {
    // Obtener el id mediante query o params
    const { id } = req.params;

    // Eliminar el artículo
    const resultado = await Proyecto.destroy({
        where : {
            id : id
        }
    });

    if(!resultado) {
        return next();
    }

    res.send(200).send('eliminado correctamente');
}
