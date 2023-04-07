var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var solicitantesControllers = require("../controllers/solicitante.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {

  solicitantesControllers.listar()
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});


module.exports = router;