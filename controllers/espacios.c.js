const espaciosModel = require ('../models/espacios.m')
 
 
 class espaciosCrontrolles {
  //listar general
  listar(){
    return new Promise ((resolve, reject) => {
      console.log ('LISTO  YA ESTAMOS EN CONTROLADOR');
      espaciosModel.listar()
      .then ((resultado) => {
        if (resultado.length == 0) {
          return resolve('Por ahora no hay espacios registrados :)')
        }
        resolve (resultado)
      })
      .catch((err) => {
        reject (err)
      });
    } )
  }
  agregar(parametro){
    console.log(parametro);
    return new Promise((resolve, reject) => {
      // el if compara lo que se debe tener para agregar 
      if (!parametro || !parametro.nombre || !parametro.direccion || !parametro.descripcion || !parametro.estatus) {
      reject("Se debe ingresar correctamente los parametros")
      }
      if (parametro.estatus != "Disponible" && parametro.estatus != "Ocupado" && parametro.estatus != "Mantenimiento") {
        resolve(`El estatus del equipo solo puede estar en: Disponible, Ocupado, Mantenimiento`);
      }
      espaciosModel.agregar(parametro)
      .then((resultado) =>  {
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}



var espaciosC = new espaciosCrontrolles()
module.exports = espaciosC