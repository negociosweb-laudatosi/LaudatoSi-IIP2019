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

module.exports = Usuario;
module.exports = Categoria;
module.exports = Publicacion;