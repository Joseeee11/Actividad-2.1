var express = require('express');
var router = express.Router();

var personalControllers = require("../controllers/personal.c.js")

//listar
router.get('/', function(req, res, next) {
  personalControllers.listar()
  .then((resultado)=>{
    res.send(resultado)
  })
  .catch((err)=>{
    res.send(err)
  })
});
//mostrar por cedula
router.get('/:CI', function(req, res, next) {

  const parametro = req.params.CI

  personalControllers.listarCedula(parametro)
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});

module.exports = router;