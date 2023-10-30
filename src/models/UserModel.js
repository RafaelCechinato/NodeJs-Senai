const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    name: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    birthday: {type: Date,required: false, default: new Date("2000-01-01")},
    status: {type: String,required: false, default: "active"},
    cpf: {type: String,required: true},
    image:{type:String, required: false},
    imageKey:{type:String, required: false},
    // veiculo:{type: mongoose.Schema.Types.ObjectId,ref: 'Veiculo',required: true,}
    // referenciar outra coleção do mongo
}, { timestamps: {} });

module.exports = mongoose.model('UserSchema', UserSchema);