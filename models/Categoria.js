//importamos de sequelize
const Sequelize = require('sequelize');

//importar la configuración de la base de datos (/config/db.js)
const db = require('../config/db.js');

//Definimos los modelos a utilizar
const Categoria = db.define( 'categoria',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre:{
        type: Sequelize.STRING(100)
    }
});

module.exports = Categoria;