var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var reserva_espaciosControllers = require("../controllers/reserva_espacios.c.js")



//Listar
router.get('/', function(req, res, next) {
  reserva_espaciosControllers.listar()
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//Listar por una Fecha en Específico
router.get('/:fecha', function(req, res, next) {
  let fechaBuscar = req.params.Fecha;
  reserva_espaciosControllers.listarFecha(fechaBuscar)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});



module.exports = router;
