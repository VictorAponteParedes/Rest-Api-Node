const Conta = require('../models/Cadastrar')
const express = require('express');
const route = express.Router();


//! Sirve para acresentar los datos que vienen del body
route.post('/add' , async(req , res , next) =>{
   try{
    const conta = Conta(req.body);
    await conta.save()
   }catch(e){
       return next(e)
   } res.send('Dato Salvo')
})
//! Es para poder Obtener todo lo registrado!
route.get('/obter' ,(req , res ) =>{
Conta.find()
.then(data => res.json(data))
.catch(err => res.json({menssage: err})) 
 });

 //! Es para poder buscar por los ides
 route.get('/:id' ,async(req , res , next)=>{
     try{
        const {id} = req.params;
        await Conta.findById(id)
        .then(data => res.json(data))
       }catch(e){
         return next(e)
     }
 });
 //! Es para poder actualizar los datos guardados
 route.put('/:id' ,(req , res)=>{
    const {id} = req.params;
    const {data , descripcion , valor , tipo} = req.body;
    Conta.updateOne({_id:id}, {$set:{data , descripcion , valor , tipo}})
   .then(data => res.json(data))
   .catch(erro => res.json({message:erro}))
})

 //! Es para que podamos borrar los datos

 route.delete('/:id' , async(req , res , next )=>{
    try{
        const {id} = req.params;
        await Conta.findByIdAndRemove(id);
    }catch(e){
        return next(e)
    }
     res.send('apagado')

 })










module.exports = route;



