///referencias

 const espaciosModel = require ('../models/espacios')
 
 
 class espaciosCrontrolles {
  listar(){
    return new Promise ((resolve, reject) => {
      console.log ('**** LISTOOOOO  YA ESTAMOS EN CONTROLADOR*****')
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