const {response} = require('express')


//Importación de los modelos
const Produccion = require('../models/produccion')

//Método GET de la API
const produccionGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {id_produccion} = req.body;
    //Consultar todos los usuarios
    try {
        let produccion;

        if (id_produccion) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            produccion = await Produccion.find({ id_produccion: id_produccion});
        } else {
            produccion = await Produccion.find();
        }

        res.json({ produccion });
    } catch (error) {
        console.error('Error al buscar Categoria Insumos:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const produccionPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const produccion= new Produccion(body)
        await produccion.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const produccionPut = async(req, res) => {

    const {id_produccion, descripcion_produccion, fecha_produccion, insumo_produccion, id_empleado, estado_produccion} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Produccion.updateMany({id_produccion: id_produccion}, {$set: {
            descripcion_produccion: descripcion_produccion,
            fecha_produccion: fecha_produccion,
            insumo_produccion:insumo_produccion,
            id_empleado:id_empleado,
            estado_produccion:estado_produccion
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}


module.exports = {
    produccionGet,
    produccionPost,
    produccionPut
}