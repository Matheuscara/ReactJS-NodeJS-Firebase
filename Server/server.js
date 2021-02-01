const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const routes =  require('./src/routes');
const mongoose = require('mongoose');

const app = express();
const port = 3333;

mongoose.connect('mongodb://localhost:27017/usuarios',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
},function (err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);


app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
});