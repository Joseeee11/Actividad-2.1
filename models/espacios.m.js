const connection = require('./conexion')


class espaciosModel{
    listar (){
        return new Promise ((resolve, reject) => {
            console.log ('AHORA ESTAMOS EN EL MODELO :)')
            connection.query ('SELECT * FROM `espacios`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            }) 
        })
    } 

}


module.exports = new espaciosModel();
    
