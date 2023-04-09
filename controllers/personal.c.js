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
  listarCedula(parametro) {
    return new Promise((resolve, reject) => {
      personalModel.listarCedula(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe personal');
           return resolve(`No hay personal registrados con esa CI: ${parametro}`)
        };
        resolve(resultado);
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  //eliminar personal
  eliminar(parametro) {
    return new Promise((resolve, reject) => {
      personalModel.listarCedula(parametro)
      .then((json) => {
        console.log('llegamos')
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe personal');
           return resolve(`No hay personal registrado con el id: ${parametro}`)
        };
        const eliminado = new Promise((resolve, reject) => {
          personalModel.eliminar(parametro)
          .then(() => {
            console.log('ya se elimino estamos en controlador')
            resolve(`se ha eliminado la reserva con el id: ${parametro}`);
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

module.exports = new personalControllers();