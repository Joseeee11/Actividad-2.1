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

    listarID(buscar) {
        console.log('estoy en modelos')
        console.log(buscar)
        return new Promise((resolve, reject, buscar) => {
            connection.query('SELECT * FROM reservas_espacios WHERE motivo = ?', ['Ruptura con Salpique'] , function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports = new reserva_espaciosModel();