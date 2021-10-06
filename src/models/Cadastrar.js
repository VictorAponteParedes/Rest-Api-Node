const mongoose = require('mongoose');
const Schame = mongoose.Schema;


const Conta  =  new Schame({
    Data:{
    type:String,
    required:true
 },
   descripcion:{
     type:String,
     required:true
 },
   valor:{
     type:Number,
     required:true
 }, 
  tipo:{
      type:String,
      required:true
  }
})

module.exports = mongoose.model('Cadastros_Credito' , Conta)
