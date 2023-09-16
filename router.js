const express = require('express');
const router = express.Router();



// Import the database connection from db.js
const dbConexion = require('./database/db.js');

// En tu archivo de ruta
    router.get('/', (req, res) => {
        // Utiliza la conexión a la base de datos para consultar los datos
        dbConexion.query('SELECT * FROM dataproductos', (error, results) => {
        if (error) {
            throw error;
        } else {
            // Renderiza la plantilla EJS y pasa los resultados de la consulta como contexto
            res.render('index', { results: results });
        }
        });
    });


    //crear registros
    router.get('/create',(req, res)=>{
        res.render('create');
    });

    const controller = require('./controllers/controller.js');
    router.post('/save', controller.save);

module.exports = router;
