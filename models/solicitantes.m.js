const connection = require('./conexion');

class solicitantesModel {
    listar() {
        return new Promise( (resolve, reject) => {
            connection.query('SELECT * FROM `solicitantes`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports = new solicitantesModel();