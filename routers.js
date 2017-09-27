var express = require('express');
var bookRouter = express.Router();
 
bookRouter.route('/').get((req,res)=>{
        res.send('this is from boks');
})
bookRouter.route('/single').get((req,res)=>{
    res.send('this is from single boks');
})
module.exports = bookRouter;