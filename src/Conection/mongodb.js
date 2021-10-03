const mongoose  = require('mongoose');
const colors = require('colors');
const uri = 'mongodb://localhost:27017/Credito'.yellow.bold

mongoose.connect(uri , {

  useNewUrlParser:true

})
.catch(err => console.log('Este es el errro:'.red.bold , err))
mongoose.connection.once('open' , _=>{
    console.log('DB esta conectada:'.blue.bold , uri)
})