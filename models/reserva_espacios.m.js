const connection = require('./conexion');

class reserva_espaciosModel {
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `trabajos`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports = new reserva_espaciosModel();