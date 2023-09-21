const {Schema, model} = require('mongoose')

const ProduccionSchema = Schema({

    id_produccion: {
        type: Number,
        unique: true,
        required: [true, 'el id de producción es obligatorio']
    },

    descripcion_produccion: {
        type: String
    },

    fecha_produccion: {
        type: Date,
        required:[true,'La fecha de orden de produccio es obligatoria']
    },

    insumo_produccion: {
        type: String,
        required: [true, 'El insumo es obligatorio']
    },

    id_empleado:{
        type: Number,
        required: [true, 'El id del empleado es obligatorio']
    }

})

//Exportar la función UsuarioSchema
module.exports = model('OrdenProduccionNV',ProduccionSchema)