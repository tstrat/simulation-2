module.exports = {
    getHouses : (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        db.get_houses({id})
        .then(houseList => {
            res.status(200).json(houseList);
        })
        .catch(error => console.error('Error in getHouses SQL query:', error));
    },
    // add house 
    addHouse: (req, res) => {
        const db = req.app.get('db');
        const id = parseInt(req.session.user.id);
        console.log({... req.body, id});
        db.add_house({... req.body, id})
        .then(success => {
            res.status(200).send("Successfully added: " + JSON.stringify(success));
        })
        .catch(error => console.error('Error in addHouse query:', error));
    },
    // remove house
    removeHouse : (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;
        db.remove_house({id})
        .then((house) => {
            if (house.length === 0) {
                res.status(404).send("No house found with id :" + id);
                return;
            }
            res.status(200).send("Successfully removed house " + JSON.stringify(house));
        })
        .catch(error => console.error('Error in removeHouse query:', error));
       
    }
}