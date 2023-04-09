const connection = require('./conexion');

class trabajosModel {
    listar() {
        return new Promise( (resolve, reject) => {
            console.log ('AHORA ESTAMOS EN EL MODELO :)')
            connection.query('SELECT * FROM `trabajos`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise((resolve, reject) => {
            console.log(parametro);
            connection.query("INSERT INTO `trabajos` set ?", [parametro], function (error, results, fields) {
            // connection.query("INSERT INTO `trabajos` (`id`, `personal_solici`, `reserva_solici`, `equipos_solici`, `fecha_inicio`, `fecha_fin`, `descripcion`) VALUES (NULL, '2', '8', '3', '2023-04-02', '2023-04-04', 'PRUEBAAAAAA');", function (error, results, fields) {
                
            if (error) throw error;
                resolve("Se agrego correctamente");
            })

        })
    }

}

module.exports= new trabajosModel();