const connection = require('./conexion')

class equiposModel {
    listar(){
        return new Promise( (resolve, reject) => {
            connection.query('SELECT * FROM `equipos`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            });
        })
    }
}


module.exports = new equiposModel();