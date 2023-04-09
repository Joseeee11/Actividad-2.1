var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var espaciosControllers = require("../controllers/espacios.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {
  console.log('ESTAMOS EN RUTA');
  espaciosControllers.listar()
  .then ((resultado) => {
    res.send(resultado);
  })
  .catch ((err) => {
    res.send(err)
  })
});

router.post('/agregar', function(req, res, next) {
  const {id, nombre, direccion, descripcion, estatus} = req.body
  const parametro = { id,nombre, direccion, descripcion, estatus}
  parametro.id=null
  espaciosControllers.agregar(parametro)
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