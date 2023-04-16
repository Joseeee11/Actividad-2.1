const connection = require('./conexion');
const { connection_2, Empresa } = require('../empresa/query_empresa');
const { json } = require('express');
const { stringify } = require('uuid');

class reserva_espaciosModel {
    //listar en general
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_espacios`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    //listar por ID
    listarID(parametro) {
        console.log('estoy en modelos')
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_espacios` WHERE id = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results)
                resolve (json);
            })
        })
    }

    //listar por una fecha en especifico 
    listarFecha(parametro) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_espacios` WHERE fecha = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results)
                resolve (json);
            })
        })
    }

    //listar por rango de fechas
    listarFechaRango(fechaI, fechaF) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_espacios` WHERE fecha >= ? AND fecha <= ?' , [fechaI, fechaF] , function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    //eliminar
    eliminar(parametro) {
        console.log('estoy eliminando')
        return new Promise((resolve, reject) => {
            console.log(`vamos a eliminar ${parametro}`)
            connection.query('DELETE FROM `reservas_espacios` WHERE id = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                resolve();
            })
        })
    }

    //agregando
    agregar(parametro){
        console.log("estoy agregando")
        return new Promise( async (resolve, reject) => {

            let verificar = ""

            let sql_espacios = `SELECT * FROM espacios WHERE id = ${parametro.espacio_solici}`
            const result_espacios = await Empresa(sql_espacios)

            if (result_espacios[0].estatus == "Ocupado") {
                console.log("estoy en ocupacion")

                let sql_comprobacion = `SELECT * FROM reservas_espacios WHERE espacio_solici = ${parametro.espacio_solici}`
                const result_comprobado = await Empresa(sql_comprobacion)

                console.log(parametro.fecha + "T04:00:00.000Z");
                
                
                result_comprobado.forEach(reservas => {
                    if (JSON.stringify(reservas.fecha) === JSON.stringify(`${parametro.fecha}T04:00:00.000Z`)) {
                        console.log("a")
                        resolve("Ya el espacio esta ocupado para la fecha")
                        verificar = "Lleno"
                    }
                });
            }

            if (verificar === "") {
                let sql_cambio = `UPDATE espacios set estatus = "Ocupado" WHERE id = ${Number(parametro.espacio_solici)}`
                const result_cambio = await Empresa(sql_cambio)


                console.log(parametro);
                connection.query("INSERT INTO `reservas_espacios` set ?", [parametro], function (error, results, fields) {
                if (error) reject (error);
                    resolve("Se agrego correctamente");
                })
            }
        })
    }
}

module.exports = new reserva_espaciosModel();