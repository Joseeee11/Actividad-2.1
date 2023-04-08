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

    return new Promise((resolve, reject) => {

      reserva_espaciosModel.listarID()
      .then((json) => {

        console.log('Respuesta del modelo');
        let resultado = JSON.parse(json)
        console.log(resultado);
        console.log('listando id'); //sabemos que esta listando por id


        let busqueda = []; 

        for (let i = 0; i < resultado.length; i++) {
          if (buscar == resultado[i].id){
            busqueda.push(resultado[i]); //agregamos a busqueda
            console.log('se añadio a busqueda');
          }
          
        };
        
        if (busqueda.length == 0) {
          console.log('Si no hay reserva');
          return resolve(`No hay reservas registrada de esta id: ${buscar}`)
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