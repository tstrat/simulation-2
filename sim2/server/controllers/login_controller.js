const users = require('../models/users');

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        let currentUser = null;
        
        currentUser = (users.find(obj => obj.username === username && obj.password === password));
        
        if (!currentUser){
            const db = req.app.get('db');
            db.get_user({username, password})
            .then(user => {
                
                currentUser = user[0];
                // console.log(username, password, currentUser);
                if (!currentUser) {
                    res.sendStatus(500);
                } else {
                    req.session.user.username = currentUser.name;
                    req.session.user.password = currentUser.password;
                    req.session.user.id = currentUser.id;
                    res.status(200).json(req.session.user);
                }
            }).catch(error => {
                console.error("Error in login login_controller: ", error)
                res.sendStatus(501);
            });
        } else {
            req.session.user.username = currentUser.name;
            req.session.user.password = currentUser.password;
            req.session.user.id = currentUser.id;
            res.status(200).json(req.session.user);
        }
        
    },
    register: (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        db.register({username, password}) 
        .then(addedUser => {
            const currentUser = addedUser[0]
            users.push(currentUser);
            req.session.user.username = currentUser.name;
            req.session.user.password = currentUser.password;
            req.session.user.id = currentUser.id;
            res.status(200).json(req.session.user);
        }).catch(error => {
            console.error("Error in register login_controller: ", error)
            res.sendStatus(501);
        });
        
    },
    signOut: (req, res) => {
        req.session.destroy();
        res.status(200).json(req.session);
    },
    getUser: (req, res) => {
        res.status(200).json(req.session.user);
    }
}