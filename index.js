// Importando los módulos de express
const express = require('express');

// Importando las rutas disponibles
const routes = require('./routes');

// Realizar la conexión a la base de datos mediante sequelize

const db = require('./config/db');
// Importar el modelo
require('./models/Proyecto');

db.sync()
    .then(() => console.log('Conectado al servidor de BD'))
    .catch(error => console.log(error));

// Creando una App de express
const app = express();

app.use('/', routes());


// Inicializando el servidor de express en un puerto
app.listen(9000);

