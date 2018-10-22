module.exports  = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).send("You need to Login!");
        return;
    }
    if (!req.session.user.username) {  // if session is made username should be '' before logins
        res.status(401).send("You need to Login!");
        return;
    }
    next();
}