var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var reserva_equiposControllers = require("../controllers/reserva_equipos.c.js")




router.get('/', function(req, res, next) {
  reserva_equiposControllers.listar()
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//listar po ID
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  reserva_equiposControllers.listarID(id)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//listar por fecha
router.get('/fecha/:fecha', function(req, res, next) {
  let parametro = req.params.fecha
  console.log(`buscar reserva con la fecha ${parametro}`) //
  reserva_equiposControllers.listarFecha(parametro)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//listar por rango de fechas
router.get('/fechasRango/:fechaI/:fechaF', function(req, res, next) {
  let fechaI = req.params.fechaI
  let fechaF = req.params.fechaF

  console.log(`buscar reservas que se necuentre entre ${fechaI} a ${fechaF}`) 
  reserva_equiposControllers.listarFechaRango(fechaI, fechaF)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
})    //PROBAR CON /fechasRango/2023-02-02/2023-12-12

//ELIMINAR
router.delete('/eliminar/:id', function(req, res, next) {
  const id = req.params.id
  console.log(id); //id que vamos a borrar

  reserva_equiposControllers.eliminar(id)
  .then((eliminado) => {
    res.send(eliminado)
  })
  .catch((err) => {
    res.send(err)
  })

})


module.exports = router;