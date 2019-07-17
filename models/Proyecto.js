//importamos de sequelize
const Sequelize = require('sequelize');

//importar la configuración de la base de datos (/config/db.js)
const db = require('../config/db.js');

const Publicacion = db.define( 'publicacion',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    categoria:{
        type:Sequelize.INTEGER
    },

    titulo:{
        type: Sequelize.STRING
    },

    contenido:{
        type: Sequelize.STRING
    },

    url:{
        type: Sequelize.STRING
    },

    usuario:{
        type: Sequelize.STRING
    },
    
    ultimaModificacion:{
        type:Sequelize.DATE
    },
});

// importar los modelos para realizarlos



module.exports = Publicacion;