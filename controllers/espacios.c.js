const espaciosModel = require ('../models/espacios.m')
 
 
 class espaciosCrontrolles {
  //listar general
  listar(){
    return new Promise ((resolve, reject) => {
      console.log ('LISTO  YA ESTAMOS EN CONTROLADOR');
      espaciosModel.listar()
      .then ((resultado) => {
        if (resultado.length == 0) {
          return resolve('Por ahora no hay espacios registrados :)')
        }
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