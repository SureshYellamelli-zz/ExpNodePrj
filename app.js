var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use('/',function(req,res){
    res.render('index',{ list: ['a','c']});
});
var port = process.env.port || 5000;
app.listen(port, (err) => {    
    if(! err){
        console.log('Server listing on port: '+port);
    }
});