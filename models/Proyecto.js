//importamos de sequelize
const Sequelize = require('sequelize');

//importar la configuración de la base de datos (/config/db.js)
const db = require('../config/db.js');

// Importar slug
const slug = require('slug');

// Importar shortid
const shortid = require('shortid');


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
        type:Sequelize.STRING
    },
}, {
    hooks : {
        beforeCreate(publicacion) {
            console.log('Antes de insertar en la base de datos');
            const url = slug(publicacion.titulo).toLowerCase();

            publicacion.url = `${url}-${shortid.generate()}`;
        },

        beforeUpdate(publicacion) {
            console.log('Antes de actualizar en la base de datos');
            const url = slug(publicacion.nombre).toLowerCase();

            publicacion.url = `${url}-${shortid.generate()}`;
        }
    }
});

// importar los modelos para realizarlos



module.exports = Publicacion;