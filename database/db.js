const mysql = require('mysql');

const dbConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudData'
});

dbConexion.connect((error) => {
    if (error) {
        console.log("Error al conectar a la base de datos");
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = dbConexion; // Exporta la conexión
