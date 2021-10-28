//! Importaciones de Modulos
const morgan = require('morgan');
const colors =require('colors');
const express = require('express');
const app = express();

//! Importaciones de Archivos 
const routeIndex = require('./routes/contaRoute')
require('./Conection/mongodb')



//! Milderwares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//!configuraciones
app.set('port' , process.env.PORT || 4500);
app.use('/main' , routeIndex)
app.use(morgan('dev'))












app.listen(app.get('port') , ()=>{
  console.log('Serve o port:'.blue.bold , app.get('port'))
})
