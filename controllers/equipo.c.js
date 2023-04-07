///referencias

const databased = require("../dataBase/dataBase.js")

class equipoControllers {
  // esta funcion muestra los equipos de la base de datos "dataBase"
  listar(){
    console.log('c listar'); // YA ESTA BIEN, NO MODIFICAAAR
    return databased.database.equipos;
  };

  // METODO POST PARA AGREGAR EQUIPOS xd, OJITO VERIFIQUEN QUE ENVIAN LOS DATOS POR EL BODY DE POSTMAN Y CONFIGURADO EN JSON.
  crear(equipo){
    if (!equipo.Nombre || !equipo.Descripción || !equipo.Serial || !equipo.Fecha_de_adquisición || !equipo.Estatus) {
      return ("No se agregó el equipo, se requiere del equipo: Nombre, Descripción, Serial, Fecha_de_adquisición, Estatus");
    }else{
      if (equipo.Estatus == "Disponible" || equipo.Estatus == "Ocupado" || equipo.Estatus == "Mantenimiento") {
        console.log('c agregar');
        databased.database.equipos.push(equipo);
        return ("***** EQUIPO AGREGADO EXITOSAMENTE *****")
      }else{
        return ("No se agrego el equipo porque no coincide los estatus con los disponibles: Disponible, Ocupado o Mantenimiento")
      }
    }
  }

  eliminar(equipo){
    if (!equipo.Serial) {
      return ('Debes ingresar el serial del equipo a eliminar :v')
    }else{
      for (let i = 0; i < databased.database.equipos.length; i++) {
        if (databased.database.equipos[i].Serial === equipo.Serial) {
          let equipoEliminado = databased.database.equipos.splice(i, 1);
          console.log(equipoEliminado);
          return ('***** SE HA ELIMINADO CON EXITO EL EQUIPO *****');
        }
      } return ('No existe el Equipo buscado con ese Serial')
    }
  }
}

module.exports = new equipoControllers();