const personalModel = require("../models/personal.m")

class personalControllers {
  listar(){
    return new Promise((resolve, reject) => {
      personalModel.listar()
      .then((resultado) => {
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new personalControllers();