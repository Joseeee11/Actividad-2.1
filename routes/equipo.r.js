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


 



module.exports = router;