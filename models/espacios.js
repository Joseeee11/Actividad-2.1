const connection = require('./conexion')
var conexion = connection

class espaciosModel{
    listar (){
        return new Promise ((resolve, reject) => {
            console.log ('**** VA DE LO MEJOR :) ****')
            conexion.query ('SELECT * FROM `espacios`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            }) 
        })
    } 

}

const espaciosM = new espaciosModel ();
module.exports = espaciosM
    
