var express = require('express'); 
var router = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
//importar controladores OJO
var equipoControllers = require("../controllers/equipos.c.js")



//LISTAR metodo GET
router.get('/', 
  function(req, res, next){
  roles = ["admin"];
  checkAutenticacion(req, res, next, roles);
  },  

  function(req, res, next) {
  equipoControllers.listar()  //llamamos a nuestra funcion listar() de la clase equipoControllers, en la cual se incluye una promesa
  .then ((resultado) => {  //Cuando nuestra promesa se jecuta conrrectamente, al usuario le retornaremos o le mostramos lo que contiene la variable resultado, la cual se explica a más detalle en Controladores
    res.status(200).json({ status: 200, data: resultado}); //mostramos al usuario
  })
  .catch ((err) => {  //Por el contrario cuando nuestra promesa al ejecutarse ocurre un error le avisamos al usuario del mismo
    res.status(404).json({ status: 404, menssage: "Existe un error", error: err}) //mostramos al usuario el error
  })
});
//listar por Id GET
router.get('/:id', function(req, res, next) { //en la URL el usuario ha de dejar el numero (ID) correspondiente al equipo que desea ver
  let parametro = req.params.id  //este ID lo guardamos en la variable parametro, pues este sera nuestro parametro de busqueda
  equipoControllers.listarID(parametro) //llamamos a la funcion listarID() y le enviamos el parametro de busqueda
  .then((resultado) => {
    res.send(resultado) //mostramos al usuario
  })
  .catch((err) => {
    res.send(err) //mostramos al usuario el error
  })
});

//AGREGAR EQUIPOS metodo POST
router.post('/agregar', function(req, res, next) { //Para agregar equipos el usuario ha de colocar en la URL "agregar", esto para que sepamos que la funcion a ejecutar es agregar y evitar confusiones. Importante que el usuario deje en el cuerpo del req los datos el equipo ha agregar
  const { nombre, serial, descripcion, fecha_adquisicion, estatus} = req.body //Del req.body solo tomaremos determinadas propiedades, esto para evitar errores si el usuario ingresa una propiedad de más que no es requerida. Además no se extrae el id, puesto que la DB la añadirá automáticamente
  const parametro = { nombre, serial, descripcion, fecha_adquisicion, estatus} //estas propiedades las cuardamos en una constante
  equipoControllers.agregar(parametro) //llamamos a la funcion y le enviamos nuestra variable con los datos
  .then((resultado) => {
    console.log("se agrego correctamente :)") //avisamos por consola que todo fue correto :)
    res.send(resultado); //mostramos al usuario
  })
  .catch((err) => {
    console.log("error")
    res.send(err) //mostramos al usuario el error
  })
});


//eliminar equipos metodo DELETE
router.delete('/eliminar/:id', function(req, res, next) { // A la hora de eliminar se coloca el /eliminar y como siguiente el ID del equipo que se desea eliminar
  const parametro = req.params.id  //lo guardamos en una variable
  console.log(parametro); //para ver (por consola) el id del equipo que vamos a borrar
  equipoControllers.eliminar(parametro) //llamamos a la funcion eliminar y le enviamos nuestra variable con el iD
  .then((eliminado) => { //Cuando se ejecute correctaente la promsa, recibimos a eliminado
    console.log('eliminado se muestra') //avisamos por consola que todo va bien
    res.send(eliminado) //llamamos a eliminado
  })
  .catch((err) => {
    res.send(err) //mostramos al usuario el error
  })
})


//modificar equipo metodo PUT
router.put('/modificar/:id', function(req, res, next) {
  const parametro = req.params.id; //Guardamos id en la variable parametro, como el las anteriores ocasiones por medio de parametro buscaremos cual es el equipo a modificar
  let { nombre , serial , descripcion , fecha_adquisicion , estatus } = req.body; //extraemos de cuerpo las propiedades necesarias para actualizar, excepto el ID puesto que el usuario no ha de poder modificarlo
  const equipoModificar = { nombre , serial , descripcion , fecha_adquisicion , estatus } //las guardamos en una constante
  equipoControllers.modificar(parametro, equipoModificar) //llamamos a la funcion modificar y le enviamos variable parametro (que contiene el ID) y la variable equipoModificado(los datos a modificar del equipo)
  .then((modificado) => { //cUando se ejecute correctamente la pormesa, recibimos a modificado
    res.send(modificado) //llamos a modificado
  })
  .catch((err) => {
    res.send(err) //mostramos al usuario el error
  })
})


module.exports = router;