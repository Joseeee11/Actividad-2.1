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

//Listar por ID
router.get('/:id', function(req, res, next) {
  let parametro = req.params.id
  console.log(parametro)

  reserva_espaciosControllers.listarID(parametro)
  .then((resultado) => {
    console.log('estamos en rutas');
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//ELIMINAR 
router.delete('/eliminar/:id', function(req, res, next) {
  const parametro = req.params.id
  console.log(parametro); //id que vamos a borrar

  reserva_espaciosControllers.eliminar(parametro)
  .then((eliminado) => {
    console.log('estamos en rutas')
    res.send(eliminado)
  })
  .catch((err) => {
    res.send(err)
  })

})



module.exports = router;
