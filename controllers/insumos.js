const {response} = require('express')


//Importación de los modelos
const Insumo = require('../models/insumos')

//Método GET de la API
const insumoGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {id_categoriaInsumo} = req.query;
    //Consultar todos los usuarios
    try {
        let insumo;

        if (id_categoriaInsumo) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            insumo = await Insumo.find({ id_categoriaInsumo: id_categoriaInsumo});
        } else {
            insumo = await Insumo.find();
        }

        res.json({ insumo });
    } catch (error) {
        console.error('Error al buscar Categoria Insumos:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const insumoPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const insumo= new Insumo(body)
        await insumo.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const insumoPut = async(req, res) => {

    const {id_categoriaInsumo, nombre_categoriaInsumo, estado_categoriaInsumo} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Insumo.updateMany({id_categoriaInsumo: id_categoriaInsumo}, {$set: {
            nombre_categoriaInsumo: nombre_categoriaInsumo,
            estado_categoriaInsumo: estado_categoriaInsumo
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const insumoDelete = async (req, res) => {
    const {id_categoriaInsumo} = req.query
    let mensaje = ''

    try{
        const insumo = await Insumo.deleteOne({id_categoriaInsumo: id_categoriaInsumo})
        mensaje = 'La eliminación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    insumoGet,
    insumoPost,
    insumoPut,
    insumoDelete
}