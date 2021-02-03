const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

var mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);