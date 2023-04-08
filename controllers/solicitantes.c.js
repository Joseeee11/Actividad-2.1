const { json } = require("express");
const solicitantesModel = require("../models/solicitantes.m.js")

class solicitantesControllers {
  listar(){
    return new Promise((resolve, reject) => {
      solicitantesModel.listar()
      .then((resultado) =>{
        resolve (resultado);
      })
      .catch((err) =>{
        reject (err);
      })
    })
  }

  listar_Cedula(parametro){
    return new Promise((resolve, reject) => {

      solicitantesModel.listar_Cedula(parametro)
      .then((json) => {

        let resultado = JSON.parse(json)
        // console.log('mostrar por cédula'); //sabemos que esta listando


        // let busqueda = []; 
        // for (let i = 0; i < resultado.length; i++) {
        //   if (parametro == resultado[i].CI){
        //     busqueda.push(resultado[i]);
        //     console.log('se añadio a busqueda');
        //   }
        // };
        
        // if (busqueda.length == 0) {
        //   console.log('No existe solicitante');
        //   return resolve(`No hay solicitantes registrados con esa CI: ${parametro}`)
        // };

        // console.log(busqueda)
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
  agregar(parametro){
    console.log(parametro);
    return new Promise((resolve, reject) => {
      // el if compara lo que se debe tener para agregar 
      if (!parametro || !parametro.nombre_apellido || !parametro.CI || !parametro.fecha_nacimiento || !parametro.direccion || !parametro.contraseña || !parametro.nro_telefono) {
      reject("Se debe ingresar correctamente los parametros")
      }
      solicitantesModel.agregar(parametro)
      .then((resultado) =>  {
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}



module.exports = new solicitantesControllers();