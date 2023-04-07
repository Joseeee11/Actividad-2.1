const espaciosModel = require ('../models/espacios.m')
 
 
 class espaciosCrontrolles {
  listar(){
    return new Promise ((resolve, reject) => {
      console.log ('LISTO  YA ESTAMOS EN CONTROLADOR');
      espaciosModel.listar()
      .then ((resultado) => {
        resolve (resultado)
      })
      .catch((err) => {
        reject (err)
      });

    } )

  }

 }


var espaciosC = new espaciosCrontrolles()
module.exports = espaciosC