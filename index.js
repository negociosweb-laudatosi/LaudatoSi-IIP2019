// Importando los módulos de express
const express = require('express');

// Importando las rutas disponibles
const routes = require('./routes');

// Creando una App de express
const app = express();

app.use('/', routes());

// Inicializando el servidor de express en un puerto
app.listen(9000);

// Realizar la conexión a la base de datos mediante sequelize

const db = require('./config/db');