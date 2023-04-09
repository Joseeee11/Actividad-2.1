var express = require('express');
var router = express.Router();

//importar controladores 
var trabajosControllers = require("../controllers/trabajos.c.js");

//listar general
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

//listar por id
router.get('/:id', function(req, res, next) {
  let parametro = req.params.id
  trabajosControllers.listarID(parametro)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//listar por personal
router.get('/personal/:id_personal', function(req, res, next) {
  let parametro = req.params.id_personal  //usuario ingrese el id del personal
  trabajosControllers.listarPersonal(parametro)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//eliminar trabajos
router.delete('/eliminar/:id', function(req, res, next) {
  const parametro = req.params.id
  console.log(parametro);
  trabajosControllers.eliminar(parametro)
  .then((eliminado) => {
    console.log('estamos en rutas')
    res.send(eliminado)
  })
  .catch((err) => {
    res.send(err)
  })
})

//agregar trabajos
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
