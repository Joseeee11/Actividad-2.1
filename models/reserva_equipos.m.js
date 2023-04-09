const connection = require('./conexion');

class reserva_equiposModel {
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT r.id, s.nombre_apellido as solicitante_nombre, r.hora_inicio, r.hora_fin, pe.nombre as personal_solici_nombre, r.fecha, r.motivo, e.nombre as equipo_solici FROM reservas_equipos r INNER JOIN solicitantes s ON r.solicitante = s.id INNER JOIN personal pe ON r.personal_solici = pe.id INNER JOIN equipos e ON r.equipo_solici = e.id;', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

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