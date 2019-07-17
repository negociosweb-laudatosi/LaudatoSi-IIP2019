//importamos de sequelize
const Sequelize = require('sequelize');

//importar la configuración de la base de datos (/config/db.js)
const db = require('../config/db.js');

//Definimos los modelos a utilizar

const Usuario = db.define( 'usuario',{ 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    nombre:{
        type:Sequelize.STRING
    },

    contrasenia:{
        type: Sequelize.STRING(50)
    },

    nivelAcceso:{
        type: Sequelize.SMALLINT
    },

    ultimaModificacion:{
        type: Sequelize.DATE
    },

    correo:{
        type: Sequelize.STRING(50)
    },

    url:{
        type:Sequelize.STRING
    }
});

module.exports = Usuario;