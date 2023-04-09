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
//listar por Id
router.get('/:id', function(req, res, next) {
  let parametro = req.params.id
  equipoControllers.listarID(parametro)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

// post
router.post('/agregar', function(req, res, next) {
  const { nombre, serial, descripcion, fecha_adquisicion, estatus} = req.body
  const parametro = { nombre, serial, descripcion, fecha_adquisicion, estatus}
  equipoControllers.agregar(parametro)
  .then((resultado) => {
    console.log("se agrego correctamente :)")
    res.send(resultado);
  })
  .catch((err) => {
    console.log("error")
    res.send(err)
  })
});


//eliminar equipos
router.delete('/eliminar/:id', function(req, res, next) {
  const parametro = req.params.id
  console.log(parametro); //id que vamos a borrar
  equipoControllers.eliminar(parametro)
  .then((eliminado) => {
    console.log('estamos en rutas')
    res.send(eliminado)
  })
  .catch((err) => {
    res.send(err)
  })
})


//modificar equipo
router.put('/modificar/:id', function(req, res, next) {
  const parametro = req.params.id; //por medio de parametro buscaremos cual es el equipo a modificar
  let { id , nombre , serial , descripcion , fecha_adquisicion , estatus } = req.body; //extraemos las propiedades necesarias para actualizar
  const equipoModificar = { id , nombre , serial , descripcion , fecha_adquisicion , estatus } //las guardamos en una constante
  equipoModificar.id == null; //ya que el usuario no puede modificar un identificador

  equipoControllers.modificar(parametro, equipoModificar)
  .then((modificado) => {
    res.send(modificado)
  })
  .catch((err) => {
    res.send(err)
  })
})

 



module.exports = router;