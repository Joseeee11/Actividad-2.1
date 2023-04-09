const connection = require('./conexion')

class equiposModel {
    //mostrar general
    listar(){
        return new Promise( (resolve, reject) => {
            connection.query('SELECT * FROM `equipos`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            });
        })
    }

    //modelo listar pro ID
    listarID(parametro) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `equipos` WHERE id = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results)
                resolve (json);
            })
        })
    }

    //eliminar por ID
    eliminar(parametro) {
        console.log('estoy eliminando')
        return new Promise((resolve, reject) => {
            console.log(`vamos a eliminar ${parametro}`)
            connection.query('DELETE FROM `equipos` WHERE id = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                resolve();
            })
        })
    }
}


module.exports = new equiposModel();