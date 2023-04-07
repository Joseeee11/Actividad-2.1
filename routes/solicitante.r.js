var express = require('express');
var router = express.Router();

//importar controladores 
var solicitantesControllers = require("../controllers/solicitante.c.js")


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