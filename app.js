var express = require('express');
var bookRouter = require('./routers');
var app = express();
app.use('/Books', bookRouter);
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');  
app.use('/', function (req, res) { 
    res.render('index', {
        title: 'Library Applicaion',
        nav:
           [
             { Link: '/Books', Title: 'Books'},
             { Link: '/Authors', Title: 'Authors'}
           ]
    });
});
var port = process.env.port || 5000;
app.listen(port, (err) => {
    if (!err) {
        console.log('Server listing on port: ' + port);
    }
});