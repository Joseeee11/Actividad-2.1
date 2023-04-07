var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var usersControllers = require("../controllers/reserva_espacios.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {

  usersControllers.listar();
  res.send(usersControllers.listar());
});


module.exports = router;
