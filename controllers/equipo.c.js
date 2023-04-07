const equiposModel = require("../models/equipos.m")

class equipoControllers {
  listar(){
    return new Promise((resolve, reject) => {
      console.log('listando ;3');
      equiposModel.listar()
      .then((resultado) => {
        resolve (resultado)
      })
      .catch((err) => { 
        reject (err)
      }) 
    })
  };
  
}

module.exports = new equipoControllers();