var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var usersControllers = require("../controllers/users.c.js")



// EL BUENOO, NO MODIFICAR XD
router.get('/', function(req, res, next) {

  usersControllers.listar();
  res.send(usersControllers.listar());
});



router.get('/:id ', function(req, res, next) { // NO ESTA LISTO TODAVÍA, FALTA MODIFICAR
  res.send("el id es:" + req.body.id);


});




router.post ('/', (req  , res)=> {
  const usuario = usersControllers.crear(req.body)

  console.log(req.body)
  res.send(usuario)

})






/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
