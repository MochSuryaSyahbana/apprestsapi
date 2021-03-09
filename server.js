const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parse Aplication/json

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log('server started on port');
});