var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var XilogravuraSchema = new Schema({
    "série": String,
    "subsérie": String,
    "autor": String,
    "númeroRegistro": String,
    "título": String,
    "suporteOuTécnica": String,
    "alturaEmCm": String,
    "larguraEmCm": String,
    "profundidadeEmCm": String,
    "alturaGravuraCm": String,
    "larguraGravuraCm": String,
    "data": String,
    "procedência": String,
    "inscrição": String,
    "verso": String,
    "assinatura": String,
    "pesquisa": String
}, { collection: 'xilogravuras' });

module.exports = XilogravuraSchema;