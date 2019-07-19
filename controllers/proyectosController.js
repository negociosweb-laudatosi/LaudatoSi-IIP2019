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
