const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {produccionGet, produccionPost, produccionPut} = require('../controllers/produccion')

route.get('/', produccionGet) //Listar los datos

route.post('/', produccionPost) //Insertar Datos

route.put('/', produccionPut) //Modificar los datos

module.exports = route