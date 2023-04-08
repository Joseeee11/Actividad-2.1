const connection = require('./conexion');

class reserva_espaciosModel {
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_espacios`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    listarID() {
        console.log('estoy en modelos')
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_espacios`' , function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports = new reserva_espaciosModel();