var express = require('express');
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var authRouter = express.Router();
var router = function (nav) {
    authRouter.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                var collection = db.collection('users');
                var user = {
                    username: req.body.userName,
                    password: req.body.password
                }
                collection.insert(user, (err, results) => {
                    req.login(results.ops[0], () => {
                        res.redirect('/auth/profile');
                    })
                });
            });
        });

    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/'
        }), function (req, res) {
            res.redirect('/auth/profile');
        });
    authRouter.route('/profile')
        .get((req, res) => {
            res.json(req.user);
        })
    return authRouter;
}
module.exports = router;