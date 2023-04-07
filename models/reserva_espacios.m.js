const connection = require('./conexion');

class reserva_espaciosModel {
    listar(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT r.id, p.nombre as solicitante, r.hora_inicio, r.hora_fin, pe.nombre as personal_solici, r.fecha, r.motivo, e.nombre as equipo_solici FROM reservas_equipos r INNER JOIN personal p ON r.solicitante = p.id INNER JOIN personal pe ON r.personal_solici = pe.id INNER JOIN equipos e ON r.equipo_solici = e.id;', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
}

module.exports = new reserva_espaciosModel();