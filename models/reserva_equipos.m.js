const connection = require('./conexion');
// Llamamos a la funcion empresa
const { connection_2, Empresa } = require('../empresa/query_empresa');
const { json } = require('express');
const { stringify } = require('uuid');

class reserva_equiposModel {
    //listar en general
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT r.id, s.nombre_apellido as solicitante_nombre, r.hora_inicio, r.hora_fin, pe.nombre as personal_solici_nombre, r.fecha, r.motivo, e.nombre as equipo_solici FROM reservas_equipos r INNER JOIN solicitantes s ON r.solicitante = s.id INNER JOIN personal pe ON r.personal_solici = pe.id INNER JOIN equipos e ON r.equipo_solici = e.id;', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    //listar por ID
    listarID(id) {
        return new Promise((resolve, reject) => {
            console.log('estamos listando')
            connection.query('SELECT * FROM `reservas_equipos` WHERE id = ?' , [id] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results)
                resolve (json);
            })
        })
    }

    //listar por una fecha en especifico
    listarFecha(parametro) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_equipos` WHERE fecha = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results)
                resolve (json);
            })
        })
    }

    //listar por rango de fechas
    listarFechaRango(fechaI, fechaF) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `reservas_equipos` WHERE fecha >= ? AND fecha <= ?' , [fechaI, fechaF] , function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    //agregando
    agregar(parametro){
        console.log("llegaaaaa");
        console.log("estoy agregando")
        return new Promise(async(resolve, reject) => {

            let verificar = ""

            let sql_equipos = `SELECT * FROM equipos WHERE id = ${parametro.equipo_solici}`
            const result_equipo = await Empresa(sql_equipos)

            if (result_equipo[0].estatus == "Mantenimiento") {
                console.log("estoy en mantenimiento")
                resolve("El equipo esta en Mantenimiento")
                verificar = "Lleno"
            }

            if (result_equipo[0].estatus == "Ocupado") {
                console.log("estoy en ocupacion")

                let sql_comprobacion = `SELECT * FROM reservas_equipos WHERE equipo_solici = ${parametro.equipo_solici}`
                const result_comprobado = await Empresa(sql_comprobacion)

                console.log(parametro.fecha + "T04:00:00.000Z");
                
                
                result_comprobado.forEach(reservas => {
                    if (JSON.stringify(reservas.fecha) === JSON.stringify(`${parametro.fecha}T04:00:00.000Z`)) {
                        console.log("a")
                        resolve("Ya el equipo esta ocupado para la fecha")
                        verificar = "Lleno"
                    }
                });
            }

            if (verificar === "") {
                let sql_cambio = `UPDATE equipos set estatus = "Ocupado" WHERE id = ${Number(parametro.equipo_solici)}`
                const result_cambio = await Empresa(sql_cambio)

                console.log(parametro);
                connection.query("INSERT INTO `reservas_equipos` set ?", [parametro], function (error, results, fields) {
                if (error) reject (error);
                    resolve("Se agrego correctamente");
                })
            }
        })
    }

    //eliminar
    eliminar(id) {
        return new Promise((resolve, reject) => {
            console.log(`vamos a eliminar la reserva ${id}`)
            connection.query('DELETE FROM `reservas_equipos` WHERE id = ?' , [id] , function (error, results, fields) {
                if (error) throw error;
                resolve();
            })
        })
    }
}

module.exports = new reserva_equiposModel();