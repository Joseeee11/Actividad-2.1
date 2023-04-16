var usuariosModel = require("../models/usuarios_m")

class usuariosController {

    login(parametro){
        return new Promise ((resolve, reject) => {
            if (!parametro.usuario || !parametro.contrasena ) {
                return resolve("No se inicio sesion porque falta: usuario, contraseña");
            }
            console.log('a controller')
            usuariosModel.login(parametro)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }
}

const usuariosC = new usuariosController();
module.exports = usuariosC