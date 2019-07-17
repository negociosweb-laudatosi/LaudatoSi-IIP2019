// importar los modelos a utilizar
const Proyecto = require('../models/Proyecto');

exports.Proyecto = async(req,res)=>{
    //TODO cargar todos los articulos y comentarios
    res.render('index');
};