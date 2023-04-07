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

  listarFecha(fechaBuscar) {
    return new Promise((resolve, reject) => {
      reserva_espaciosModel.listar()
      .then((resultado) => {
        console.log(fechaBuscar);
        console.log('listando fecha'); //sabemos que esta listando por fecha
        let busqueda = []; 
        for (let i = 0; i < resultado.length; i++) {
          if (fechaBuscar === resultado[i].fecha){
            busqueda.push(resultado[i]); //agregamos a busqueda
          }
        };
        if (busqueda.length === 0) {
          return (`No hay reservas durante esta fecha: ${fechaBuscar}`);
        };
        resolve(busqueda)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new reserva_espaciosControllers();