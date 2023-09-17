const conexion = require('../database/db');

exports.save = (req, res) => {
    const Id = req.body.Id;
    const Fecha_de_creacion = new Date();
    const Nombre = req.body.Nombre;
    const Categoria = req.body.Categoria;
    const Precio = req.body.Precio;
    const Valor = req.body.Valor;
    const Stock = req.body.Stock;

    conexion.query('INSERT INTO dataproductos SET ?', {Id:Id,Fecha_de_creacion:Fecha_de_creacion,Nombre:Nombre,Categoria:Categoria,Precio:Precio,Valor:Valor,Stock:Stock},
            (error, results)=>{
                if(error){
                    console.log(error);
                }else{
                    res.redirect('/');
                }
            })

    const sql = 'INSERT INTO dataproductos (Id, Fecha_de_creacion, Nombre, Categoria, Precio, Valor, Stock) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [Id, Fecha_de_creacion, Nombre, Categoria, Precio, Valor, Stock];

    // Ejecutar la consulta SQL para insertar
    conexion.query(sql, values, (error, _result) => {
        if (error) {
            console.error('Error al insertar datos:', error);
            return res.status(500).send('Error al guardar los datos en la base de datos');
        }

        // Después de la inserción, recuperar los datos actualizados
        conexion.query('SELECT * FROM dataproductos', (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Error al recuperar los datos de la base de datos');
            }

            // Renderizar la vista con los datos recuperados
            res.render('index.ejs', { results: results });
        });
    });
}

exports.update= (req, res)=>{
    const Id = req.body.Id;
    const Fecha_de_creacion = new Date();
    const Nombre = req.body.Nombre;
    const Categoria = req.body.Categoria;
    const Precio = req.body.Precio;
    const Valor = req.body.Valor;
    const Stock = req.body.Stock;

    conexion.query('INSERT INTO dataproductos SET ? WHERE Id = ?', {Id:Id,Fecha_de_creacion:Fecha_de_creacion,Nombre:Nombre,Categoria:Categoria,Precio:Precio,Valor:Valor,Stock:Stock},
    (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}