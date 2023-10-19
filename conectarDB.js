const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rafaelsenai:rafaelsenai@mycluster.zrhbeeo.mongodb.net/");

const db = mongoose.connection
module.exports = db;