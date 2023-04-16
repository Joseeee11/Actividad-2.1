var express = require('express');
var router = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
var usuariosController = require("../controllers/usuarios_c")

//login

router.post(    '/login', 
function(req, res, next) {
    const { usuario, contrasena} = req.body
    const parametro = { usuario, contrasena}
    usuariosController.login(parametro)
  .then((resultado)=>{
    res.send(resultado);
  })
  .catch((err)=>{
    res.send(err)
  })
});

module.exports = router;