const { response } = require("express");
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

    //agregar un equipo
    agregar(parametro){
      console.log(parametro);
      return new Promise((resolve, reject) => {
        // el if compara lo que se debe tener para agregar 
        if (!parametro || !parametro.nombre || !parametro.serial || !parametro.descripcion || !parametro.fecha_adquisicion || !parametro.estatus) {
          reject("Se debe ingresar correctamente los parametros")
        }
        if (parametro.estatus != "Disponible" && parametro.estatus != "Ocupado" && parametro.estatus != "Mantenimiento") {
          resolve(`El estatus del equipo solo puede estar en: Disponible, Ocupado, Mantenimiento`);
        }
        equiposModel.agregar(parametro)
        .then((resultado) =>  {
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

  //modificar
  modificar(parametro, equipoModificar) {
    return new Promise((resolve, reject) => {
      if (!equipoModificar || !equipoModificar.nombre || !equipoModificar.serial || !equipoModificar.descripcion || !equipoModificar.fecha_adquisicion || !equipoModificar.estatus) {
        reject(`La informacion ingresada no es la correcta. Es necesaria la informacion: NOMBRE, SERIAL, DESCRIPCION, FECHA_ADQUISICION y ESTATUS`);
      }
      equiposModel.listarID(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
          console.log('No existe el equipo');
          return resolve(`No hay equipos registrados con esta id: ${parametro}. Por lo tanto no se puede modificar`)
        };
        if (equipoModificar.estatus != "Disponible" && equipoModificar.estatus != "Ocupado" && equipoModificar.estatus != "Mantenimiento") {
          return resolve(`El estatus del equipo solo puede estar en: Disponible, Ocupado, Mantenimiento`);
        }
        const modificado = new Promise((resolve, reject) => {
          equiposModel.modificar(parametro, equipoModificar)
          .then(() => {
            resolve(`se ha modificado correctamente el equipo con el id: ${parametro}`);
          })
          .catch((err) => {
            reject(err);
          })
        })
        resolve(modificado);
      })
    })
  }

}

module.exports = new equipoControllers();