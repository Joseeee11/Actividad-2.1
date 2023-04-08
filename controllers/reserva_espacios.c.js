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

  listarID(buscar) {
    return new Promise((resolve, reject, aver) => {
      console.log(buscar)
      reserva_espaciosModel.listarID(buscar)
      .then((resultado) => {
        console.log(buscar);
        console.log('listando id'); //sabemos que esta listando por id
        console.log(resultado);

          // let busqueda = []; 
          // for (let i = 0; i < resultado.length; i++) {
          //   if (id == resultado[i].id){
          //     busqueda.push(resultado[i]); //agregamos a busqueda
          //   }
          // };
          // if (busqueda.length === 0) {
          //   return (`No hay reservas durante esta id: ${id}`);
          // };
          // resolve(busqueda)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new reserva_espaciosControllers();