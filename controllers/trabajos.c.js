const trabajosModel = require('../models/trabajos.m');

class trabajosControllers {
    listar(){
        return new Promise((resolve, reject) => {
            console.log ('LISTO  YA ESTAMOS EN CONTROLADOR');
            trabajosModel.listar()
            .then ((resultado) => {
                resolve (resultado)
            })
            .catch((err) => {
                reject (err)
            })
        })
    }
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
            reject(err)
          })
        })
    }
    
}



module.exports= new trabajosControllers();