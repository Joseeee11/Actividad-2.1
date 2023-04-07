///referencias
require('uuid')

const databased = require("../dataBase/dataBase.js")

class usersControllers {
  // esta funcion muestra los equipos de la base de datos "dataBase"
  listar(){
    console.log('c listar'); // YA ESTA BIEN, NO MODIFICAAAR
    return databased.database.solicitante;
  }
}

module.exports = new usersControllers();