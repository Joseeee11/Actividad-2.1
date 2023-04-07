var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var equipoControllers = require("../controllers/equipo.c.js")



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


 


// EL METODO POST PARA AGREGAR, OJITO
router.post('/', function(req, res, next){
  let equipo = req.body
  res.send(equipoControllers.crear(equipo));
})

router.delete('/', function(req, res, next){
  let equipo = req.body
  res.send(equipoControllers.eliminar(equipo));
})


module.exports = router;