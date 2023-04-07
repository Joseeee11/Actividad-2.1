const reserva_equiposModel = require("../models/reserva_equipos.m")

class reserva_equiposControllers {
  listar(){
    return new Promise((resolve, reject) => {
      reserva_equiposModel.listar()
      .then((resultado) => {
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new reserva_equiposControllers();