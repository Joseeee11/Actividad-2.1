var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var reserva_equiposControllers = require("../controllers/reserva_equipos.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {
  reserva_equiposControllers.listar()
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});



//ELIMINAR
router.delete('/:id', function(req, res, next) {
  const borrar = req.params.id
  console.log(borrar); //id que vamos a borrar

  reserva_equiposControllers.eliminar(borrar)
  .then((eliminado) => {
    console.log('estamos en rutas')
    res.send(eliminado)
  })
  .catch((err) => {
    res.send(err)
  })

})


module.exports = router;