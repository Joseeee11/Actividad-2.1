const connection = require('./conexion')


class espaciosModel{
    //listar general
    listar (){
        return new Promise ((resolve, reject) => {
            console.log ('AHORA ESTAMOS EN EL MODELO :)')
            connection.query ('SELECT * FROM `espacios`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            }) 
        })
    } 
    //agregar espacios
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO `espacios` set ?", [parametro], function (error, results, fields) {
                if (error) reject (error);
                resolve("Se agrego correctamente");
            })

        })
    }
}




module.exports = new espaciosModel();
    
