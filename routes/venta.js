const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {ventaGet, ventaPost, ventaPut} = require('../controllers/venta')

route.get('/', ventaGet) //Listar los datos

route.post('/', ventaPost) //Insertar Datos

route.put('/', ventaPut) //Modificar los datos

module.exports = route