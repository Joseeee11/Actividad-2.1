const reserva_espaciosModel = require("../models/reserva_espacios.m")

class reserva_espaciosControllers {
  listar(){
    return new Promise((resolve, reject) => {
      reserva_espaciosModel.listar()
      .then((resultado) => {
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  listarID(id) {

    return new Promise((resolve, reject) => {

      reserva_espaciosModel.listarID(id)
      .then((json) => {

        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe solicitante');
           return resolve(`No hay solicitantes registrados con esa id: ${id}`)
        };

        console.log(resultado)
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  eliminar(id) {
    return new Promise((resolve, reject) => {
      reserva_espaciosModel.listarID(id)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe solicitante');
           return resolve(`No hay solicitantes registrados con esa id: ${id}`)
        };

        const eliminado = new Promise((resolve, reject) => {
          reserva_espaciosModel.eliminar(id)
          .then(() => {
            console.log('ya se elimino estamos en controlador')
            resolve(`se ha eliminado la reserva con el id: ${id}`);
          })
          .catch((err) => {
            reject(err);
          })
        })
        
        console.log('nos vamos a rutas');
        resolve(eliminado);
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new reserva_espaciosControllers();