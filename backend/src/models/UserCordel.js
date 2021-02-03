var mongoose = require('mongoose');

var UserCordelSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
}, { collection: 'userCordeis' });

module.exports = mongoose.model('UserCordel', UserCordelSchema);