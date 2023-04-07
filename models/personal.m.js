const connection = require('./conexion');

class personalModel{
    listar(){
        return new Promise((resolve, reject)=>{
            connection.query ('SELECT * FROM `personal`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            }) 
        })
    }
}

module.exports= new personalModel();