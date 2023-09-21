const {Schema, model} = require('mongoose')

const InsumoSchema = Schema({

    id_categoriaInsumo: {
        type: Number,
        unique: true,
        required: [true, 'el id del insumo es obligatoria']
    },

    nombre_categoriaInsumo: {
        type: String,
        required: [true, 'El nombre de la categoria insumo es obligatoria']
    },

    estado_categoriaInsumo: {
        type: Boolean,
        default: true
    }

})

//Exportar la función UsuarioSchema
module.exports = model('catInsumosNV',InsumoSchema)