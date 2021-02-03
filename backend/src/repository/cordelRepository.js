var mongoose = require('mongoose');
CordelSchema = require('../models/Cordel');

var Cordel = mongoose.model('Cordel', CordelSchema);
module.exports = Cordel;