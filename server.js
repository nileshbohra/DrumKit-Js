const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/static',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__filename,'../views/index.html'));
});

app.listen(port, ()=>{
    console.log("server started at port "+port);
})