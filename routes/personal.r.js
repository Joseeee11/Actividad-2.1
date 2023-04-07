var express = require('express');
var router = express.Router();

var personalControllers = require("../controllers/personal.c.js")


router.get('/', function(req, res, next) {

  personalControllers.listar()
  .then((resultado)=>{
    res.send(resultado)
  })
  .catch((err)=>{
    res.send(err)
  })

});


module.exports = router;