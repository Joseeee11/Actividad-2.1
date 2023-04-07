var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var espaciosControllers = require("../controllers/espacios.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {

  espaciosControllers.listar()
  .then ((resultado) => {
    res.send(resultado);
  })
  .catch ((err) => {
    res.send(err)
  })
});


module.exports = router;