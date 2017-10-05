var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    passport.use(new LocalStrategy({
        userNameField: 'userName',
        passwordField: 'password'
    },
    (username, password, done) => {
            var user = {
                username: username,
                password: password
            };
            done(null, user);
        }));
};

