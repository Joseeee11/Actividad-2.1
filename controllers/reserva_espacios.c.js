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

  listarID(parametro) {

    return new Promise((resolve, reject) => {

      reserva_espaciosModel.listarID(parametro)
      .then((json) => {

        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe reservas');
           return resolve(`No hay reservas registrados con esa id: ${parametro}`)
        };

        console.log(resultado)
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  eliminar(parametro) {
    return new Promise((resolve, reject) => {
      reserva_espaciosModel.listarID(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe esta reserva');
           return resolve(`No hay reservas registrados con esa id: ${parametro}`)
        };

        const eliminado = new Promise((resolve, reject) => {
          reserva_espaciosModel.eliminar(parametro)
          .then(() => {
            console.log('ya se elimino estamos en controlador')
            resolve(`se ha eliminado la reserva con el id: ${parametro}`);
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