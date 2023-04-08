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
    console.log(buscar);
    return new Promise((resolve, reject) => {
      console.log(buscar);
      reserva_espaciosModel.listarID()
      .then((resultado) => {
        console.log(resultado);
        let prueba = JSON.stringify(resultado)
        console.log(prueba);
        console.log('listando id'); //sabemos que esta listando por id


        let busqueda = []; 
        for (let i = 0; i < prueba.length; i++) {
          if (buscar == prueba[i].id){
            busqueda.push(prueba[i]); //agregamos a busqueda
          }
        };
        if (busqueda.length === 0) {
          return (`No hay reservas durante esta id: ${buscar}`);
        };
        console.log(busqueda)
        resolve(busqueda)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new reserva_espaciosControllers();