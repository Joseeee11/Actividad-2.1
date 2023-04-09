const equiposModel = require("../models/equipos.m")

class equipoControllers {
  //listar general
  listar(){
    return new Promise((resolve, reject) => {
      console.log('listando ;3');
      equiposModel.listar()
      .then((resultado) => {
        if (resultado.length == 0) {
          return resolve('Por ahora no hay equipos registrados :)')
        }
        resolve (resultado)
      })
      .catch((err) => { 
        reject (err)
      }) 
    })
  };
  
  //listar por ID
  listarID(parametro) {
    return new Promise((resolve, reject) => {
      equiposModel.listarID(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           return resolve(`No hay equipos registrados con esta id: ${parametro}`)
        };
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }


  //eliminar equipos
  eliminar(parametro) {
    return new Promise((resolve, reject) => {
      equiposModel.listarID(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe el equipo');
           return resolve(`No hay equipos registrados con esa id: ${parametro}`)
        };
        const eliminado = new Promise((resolve, reject) => {
          equiposModel.eliminar(parametro)
          .then(() => {
            resolve(`se ha eliminado el equipo con el id: ${parametro}`);
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

module.exports = new equipoControllers();