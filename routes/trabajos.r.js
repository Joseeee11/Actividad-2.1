var express = require('express');
var router = express.Router();

//importar controladores 
var trabajosControllers = require("../controllers/trabajos.c.js");

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

module.exports = router;
