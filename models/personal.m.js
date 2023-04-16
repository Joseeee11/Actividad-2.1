const connection = require('./conexion');
const bcryptjs = require('bcryptjs');
const { connection_2, Empresa } = require('../empresa/query_empresa')

class personalModel{
    //listar general
    listar(){
        return new Promise((resolve, reject)=>{
            connection.query ('SELECT * FROM `personal`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            }) 
        })
    }

    //listar por cedula
    listarCedula(parametro) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `personal` WHERE CI = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results);
                console.log(results)
                resolve (json);
            })
        })
    }

    //agregar personal
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise( async (resolve, reject) => {

            var passwordHash = await bcryptjs.hash(parametro.contrasena, 8);
            parametro.contrasena = passwordHash

            let sql_usuarios = `INSERT INTO usuarios (usuario, contrasena, rol) VALUES ("${parametro.usuario_unico}", "${parametro.contrasena}", "admin")`
            const result = await Empresa(sql_usuarios)

            connection.query("INSERT INTO `personal` set ?", [parametro], function (error, results, fields) {
                if (error) reject (error);
                resolve("Se agrego correctamente");
            })

        })
    }

    //eliminar
    eliminar(parametro){
        console.log('estoy eliminando')
        return new Promise((resolve, reject) => {
            console.log(`vamos a eliminar ${parametro}`)
            connection.query('DELETE FROM `personal` WHERE CI = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                resolve()
            })
        })
    }
    
}

module.exports= new personalModel();