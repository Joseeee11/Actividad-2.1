const connection = require('./conexion');

class reserva_equiposModel {
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_equipos`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports = new reserva_equiposModel();