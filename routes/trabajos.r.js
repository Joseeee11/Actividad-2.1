var express = require('express');
var router = express.Router();

//importar controladores 
var trabajosControllers = require("../controllers/trabajos.c.js");

router.get('/', function(req, res, next) {
    console.log('estamos en ruta')
    trabajosControllers.listar()
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((err) => {
      res.send(err)
    })
    }
)

router.post('/agregar', function(req, res, next) {
  const {id, personal_solici, reserva_solici, equipos_solici, fecha_inicio, fecha_fin, descripcion} = req.body
  const parametro = { id,personal_solici, reserva_solici, equipos_solici, fecha_inicio, fecha_fin, descripcion}
  parametro.id=null
  trabajosControllers.agregar(parametro)
  .then((resultado) => {
    console.log("se agrego correctamente :)")
    res.send(resultado);
  })
  .catch((err) => {
    console.log("errorrrrrrr")
    res.send(err)
  })
});


module.exports = router;
