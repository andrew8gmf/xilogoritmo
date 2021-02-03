var mongoose = require('mongoose');
XilogravuraSchema = require('../models/Xilogravura');

var Xilogravura = mongoose.model('Xilogravura', XilogravuraSchema);
module.exports = Xilogravura;