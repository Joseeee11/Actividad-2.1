var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var equipoControllers = require("../controllers/equipos.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {
  equipoControllers.listar()
  .then ((resultado) => {
    res.send(resultado);
  })
  .catch ((err) => {
    res.send(err)
  })
});
//listar por Id
router.get('/:id', function(req, res, next) {
  let parametro = req.params.id
  equipoControllers.listarID(parametro)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});


//eliminar equipos
router.delete('/eliminar/:id', function(req, res, next) {
  const parametro = req.params.id
  console.log(parametro); //id que vamos a borrar
  equipoControllers.eliminar(parametro)
  .then((eliminado) => {
    console.log('estamos en rutas')
    res.send(eliminado)
  })
  .catch((err) => {
    res.send(err)
  })
})

 



module.exports = router;