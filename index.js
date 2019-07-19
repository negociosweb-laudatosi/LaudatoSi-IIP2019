// Importando los módulos de express
const express = require('express');

// Importando las rutas disponibles
const routes = require('./routes');

// Importando los módulos para direcciones
const path = require('path');
// Realizar la conexión a la base de datos mediante sequelize

// Importar los módulos para utilizar body parser
const bodyParser = require('body-parser');
// Importar los helpers con funciones en común para el proyecto
const helpers = require('./helpers');


const db = require('./config/db');

// Importar el modelo
require('./models/Proyecto');
require('./models/Categoria');


db.sync()
    .then(() => console.log('Conectado al servidor de BD'))
    .catch(error => console.log(error));

// Creando una App de express
const app = express();

//Definiendo donde se carga los archivos estáticos
app.use(express.static('public'));

// Habilitando Pug como  Template Engine
app.set('view engine', 'pug');

// Habilitar BodyParser para leer los datos de los formularios
app.use(bodyParser.urlencoded({extended: true}));

// Pasar el vardump a la aplicación (middleware)
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

// Añadiendo la carpeta (ruta) que contiene las View (vistas)
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());


// Inicializando el servidor de express en un puerto
app.listen(9000);

