const connection = require('./conexion');

class trabajosModel {
    listar() {
        return new Promise( (resolve, reject) => {
            console.log ('AHORA ESTAMOS EN EL MODELO :)')
            connection.query('SELECT * FROM `trabajos`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports= new trabajosModel();