const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require('./conexion');
var conexion = connection

crearToken = async (user) =>{
    return jwt.sign(
        {
            id: user.id,
            rol: user.rol
        },
        "claveSecreta",
        {
            expiresIn: "2h"
        }
    )
}

class usuariosModel {

    login(parametro){
        let usuario_user = '"'+parametro.usuario+'"'
        let password = '"'+parametro.contrasena+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('SELECT * FROM `usuarios` WHERE usuario = '+usuario_user,
            async function (error, results, fields){
                if(error) throw error;
                if (results.length > 0) {
                    if(error) throw error;
                    const checkPassword = await bcryptjs.compare(parametro.contrasena, results[0].contrasena);
                    const tokenSession = await crearToken(results[0])
                    console.log(checkPassword)
                    if (checkPassword) {
                        var data = {
                            usuario: parametro.usuario,
                            token: tokenSession
                        }
                        resolve(data)
                    }else{
                        resolve('Password Incorrecta')
                    }
                }else{
                    resolve('No existe el usuario')
                }
            }
        );
        })
    }
}

const usuariosM = new usuariosModel();
module.exports = usuariosM;