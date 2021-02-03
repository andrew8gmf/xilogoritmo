var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CordelSchema = new Schema({
    "códigoDeReferência": String,
    "unidadeDeArmazenamento": String,
    "gêneroDocumental": String,
    "espécieDocumental": String,
    "suporte": String,
    "título": String,
    "descrição": String,
    "localidade": String,
    "data": String,
    "idioma": String,
    "autor": String,
    "técnicaDeRegistro": String,
    "cromia": String,
    "númDeFolhas": String,
    "notasDePesquisa": String,
    "observações": String,
    "palavrasChave": String,
    "tema": String,
    "técnicaDeGravura": String,
    "transcrição": String
}, { collection: 'cordeis' });

module.exports = CordelSchema;