const trabajosModel = require('../models/trabajos.m');

class trabajosControllers {
  //listar general
    listar(){
        return new Promise((resolve, reject) => {
            console.log ('LISTO  YA ESTAMOS EN CONTROLADOR');
            trabajosModel.listar()
            .then ((resultado) => {
                if (resultado.length == 0) {
                  return resolve('Por ahora no hay trabajos registrados :)')
                }
                resolve (resultado)
            })
            .catch((err) => {
                reject (err)
            })
        })
    }

    //LISTAR POR id
    listarID(parametro) {
      return new Promise((resolve, reject) => {
        trabajosModel.listarID(parametro)
        .then((json) => {
          let resultado = JSON.parse(json)
          if (resultado.length == 0) {
             return resolve(`No hay trabajos registrados con esta id: ${parametro}`)
          };
          resolve(resultado)
        })
        .catch((err) => {
          reject(err)
        })
      })
    }
    
    //LISTAR POR Personal
    listarPersonal(parametro) {
      return new Promise((resolve, reject) => {
        trabajosModel.listarPersonal(parametro)
        .then((json) => {
          let resultado = JSON.parse(json)
          if (resultado.length == 0) {
             return resolve(`No hay trabajos registrados para el Personal: ${parametro}`)
          };
          resolve(resultado)
        })
        .catch((err) => {
          reject(err)
        })
      })
    }

    //eliminar
    eliminar(parametro) {
      return new Promise((resolve, reject) => {
        trabajosModel.listarID(parametro)
        .then((json) => {
          let resultado = JSON.parse(json)
          if (resultado.length == 0) {
             console.log('No existe el trabajo');
             return resolve(`No hay trabajos registrados con esa id: ${parametro}`)
          };
  
          const eliminado = new Promise((resolve, reject) => {
            trabajosModel.eliminar(parametro)
            .then(() => {
              console.log('ya se elimino estamos en controlador')
              resolve(`se ha eliminado el trabajo con el id: ${parametro}`);
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



    //AGREGAR UN NUEVO TRABAJO
    agregar(parametro){
        console.log(parametro);
        return new Promise((resolve, reject) => {
          // el if compara lo que se debe tener para agregar 
          if (!parametro || !parametro.personal_solici || !parametro.reserva_solici || !parametro.equipos_solici || !parametro.fecha_inicio || !parametro.fecha_fin || !parametro.descripcion) {
          reject("Se debe ingresar correctamente los parametros")
          }
          trabajosModel.agregar(parametro)
          .then((resultado) =>  {
            resolve(resultado)
          })
          .catch((err) => {
            reject(`Ha ocurrido un problema al agregar el trabajo ${err}`)
          })
        })
    }
    
}



module.exports= new trabajosControllers();