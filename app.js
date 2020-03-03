const express = require('express');
const bodyParser = require('body-parser');

const app = express();  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const product = require('./routes/product.route');

app.use('/products', product);

const mongoose=require('mongoose');
mongoose.connect ("mongodb://127.0.0.1:27017/db",{ useNewUrlParser:true },(err)=>{
if(!err) {console.log("Mongodb Connection Succeded")}
else{ console.log("Error in Connection:",err)}

});

let port = 1234;

app.listen(port, () => {
    console.log('listening on ' + port);
});


