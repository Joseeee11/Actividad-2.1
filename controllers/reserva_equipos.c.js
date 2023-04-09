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
  listarID(id){
    return new Promise((resolve, reject) => {
      reserva_equiposModel.listarID(id)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
          console.log('No existe');
          return resolve(`No hay reservas registrada de esta id: ${id}`);
        };
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }


  eliminar(id) {
    return new Promise((resolve, reject) => {
      reserva_equiposModel.listarID(id)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
          console.log('No existe');
          return resolve(`No hay reservas registrada de esta id: ${id}`);
        };

        const eliminado = new Promise((resolve, reject) => {
          reserva_equiposModel.eliminar(id)
          .then(() => {
            resolve(`se ha eliminado la reserva con el id: ${id}`);
          })
          .catch((err) => {
            reject(err);
          })
        })
        
        resolve(eliminado);
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new reserva_equiposControllers();