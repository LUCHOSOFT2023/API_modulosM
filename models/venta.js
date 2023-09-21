const {Schema, model} = require('mongoose')

const VentaSchema = Schema({

    id_venta: {
        type: Number,
        unique: true,
        required: [true, 'el id de la venta es obligatoria']
    },

    descripcion_venta: {
        type: String
    },

    fecha_venta: {
        type: Date,
        required:[true,'La fecha de la venta es obligatoria']
    },

    precio_venta: {
        type: Number,
        required: [true, 'El precio de la venta es obligatorio']
    },

    id_pedido:{
        type: Number,
        required: [true, 'El id del pedido es obligatorio']
    },

    estado_venta:{
        type: Boolean,
        default: true
    }

})

//Exportar la función UsuarioSchema
module.exports = model('VentaNV',VentaSchema)