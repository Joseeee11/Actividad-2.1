// Importamos el until, la conexion con nuestra base de datos
const util = require('util')
const connection_2 = require('../config/connection')
// Creamos una variable para realizar las consultas
const query = util.promisify(connection_2.query).bind(connection_2)

// Función para los errores de las peticiones a la base de datos
async function Empresa(sql) {
    try {
        let sql_query = sql
        const res = await query(sql_query)
        return res
    }catch(err) {
        console.log(`Hubo un error : ${err}`)
        return err
    }
}

// Exportamos
module.exports = {
    Empresa,
    connection_2
}