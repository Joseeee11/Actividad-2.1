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
}

module.exports= new trabajosControllers();