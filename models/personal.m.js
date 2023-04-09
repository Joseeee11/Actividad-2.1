const connection = require('./conexion');

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