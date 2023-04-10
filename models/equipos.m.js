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

    //agregar equipos
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO `equipos` set ?", [parametro], function (error, results, fields) {
                if (error) reject (error);
                resolve("Se agrego correctamente");
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

    //modificar
    modificar(parametro, equipoModificar){
        console.log('estoy modificando')
        return new Promise((resolve, reject) => {
            console.log(`vamos a modificar el equipo ${parametro}`)
            connection.query('UPDATE `equipos` set ? WHERE id = ?' , [equipoModificar, parametro] , function (error, results, fields) {
                if (error) throw error;
                resolve();
            })
        })
    }
}


module.exports = new equiposModel();