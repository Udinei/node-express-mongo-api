const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// Campos e tipos do schema(conceito, tabela), todos os campos devem ser
// no formato de objeto json
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// carregando plugin de paginação
ProductSchema.plugin(mongoosePaginate);

// registrando o model Product na aplicação
mongoose.model('Product', ProductSchema);