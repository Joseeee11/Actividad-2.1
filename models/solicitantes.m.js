const connection = require('./conexion');
const bcryptjs = require("bcryptjs");
const { connection_2, Empresa } = require('../empresa/query_empresa')

class solicitantesModel {
    ///listar en general
    listar() {
        return new Promise( (resolve, reject) => {
            connection.query('SELECT * FROM `solicitantes`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    //listar por cedula
    listar_Cedula(parametro) {
        console.log('llegamos a modelo')
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `solicitantes` WHERE CI = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results);
                console.log(results)
                resolve (json);
            })
        })
    }

    //agregar solicitantes
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise( async (resolve, reject) => {

            var passwordHash = await bcryptjs.hash(parametro.contrasena, 8);
            parametro.contrasena = passwordHash

            let sql_usuarios = `INSERT INTO usuarios(usuario, contrasena, rol) VALUES ("${parametro.usuario}", "${parametro.contrasena}", "user")`
            const result = await Empresa(sql_usuarios)

            connection.query("INSERT INTO `solicitantes` set ?", [parametro], function (error, results, fields) {
                if (error) throw error;
                resolve("Se agrego correctamente");
            })

        })
    }
}

module.exports = new solicitantesModel();