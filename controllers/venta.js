const {response} = require('express')


//Importación de los modelos
const Venta = require('../models/venta')

//Método GET de la API
const ventaGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {id_venta} = req.body;
    //Consultar todos los usuarios
    try {
        let venta;

        if (id_venta) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            venta = await Venta.find({ id_venta: id_venta});
        } else {
            venta = await Venta.find();
        }

        res.json({ venta });
    } catch (error) {
        console.error('Error al buscar Categoria Insumos:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const ventaPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const venta= new Venta(body)
        await venta.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const ventaPut = async(req, res) => {

    const {id_venta, descripcion_venta, fecha_venta, precio_venta, id_pedido, estado_venta} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Venta.updateMany({id_venta: id_venta}, {$set: {
            descripcion_venta: descripcion_venta,
            fecha_venta: fecha_venta,
            precio_venta:precio_venta,
            id_pedido:id_pedido,
            estado_venta:estado_venta
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}


module.exports = {
    ventaGet,
    ventaPost,
    ventaPut
}