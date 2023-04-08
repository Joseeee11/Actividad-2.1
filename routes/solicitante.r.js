var express = require('express');
var router = express.Router();

//importar controladores 
var solicitantesControllers = require("../controllers/solicitantes.c.js")


router.get('/', function(req, res, next) {

  solicitantesControllers.listar()
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});

//busqueda por Cedula
router.get('/:CI', function(req, res, next) {

  const parametro = req.params.CI

  solicitantesControllers.listar_Cedula(parametro)
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});

router.post('/agregar', function(req, res, next) {
  const {id, nombre_apellido, CI, fecha_nacimiento, direccion, contraseña, nro_telefono} = req.body
  const parametro = { id,nombre_apellido, CI, fecha_nacimiento, direccion, contraseña, nro_telefono}
  parametro.id=null
  solicitantesControllers.agregar(parametro)
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