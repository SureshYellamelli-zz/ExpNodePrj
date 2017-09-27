var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));
var port = process.env.port || 5000;
app.listen(port, (err) => {    
    if(! err){
        console.log('Server listing on port: '+port);
    }
});