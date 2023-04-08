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


  eliminar(borrar) {
    return new Promise((resolve, reject) => {
      reserva_equiposModel.listarID()
      .then((json) => {
        let resultado = JSON.parse(json)

        let busqueda = []; 
        for (let i = 0; i < resultado.length; i++) {
          if (borrar == resultado[i].id){
            busqueda.push(resultado[i]); //agregamos a busqueda
            console.log('se encontró');
          } 
        };
        if (busqueda.length == 0) {
          console.log('No existe');
          return resolve(`No hay reservas registrada de esta id: ${borrar}`);
        };

        const eliminado = new Promise((resolve, reject) => {
          reserva_equiposModel.eliminar(borrar)
          .then(() => {
            resolve(`se ha eliminado la reserva con el id: ${borrar}`);
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