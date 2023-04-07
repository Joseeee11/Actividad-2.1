const solicitantesModel = require("../models/solicitantes.m.js")

class solicitantesControllers {
  listar(){
    return new Promise((resolve, reject) => {
      solicitantesModel.listar()
      .then((resultado) =>{
        resolve (resultado);
      })
      .catch((err) =>{
        reject (err);
      })
    })
  }
}

module.exports = new solicitantesControllers();