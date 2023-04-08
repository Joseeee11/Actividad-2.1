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
router.get('/:id', function(req, res, next) {
  let buscar = req.params.id
  console.log(buscar)
  // let aver = new Number(buscar)
  // console.log(aver)
  reserva_espaciosControllers.listarID(buscar)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});



module.exports = router;
