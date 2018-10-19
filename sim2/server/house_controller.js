module.exports = {
    getHouses : (req, res, next) => {
        const db = req.app.get('db');
        db.get_houses()
        .then(houseList => {
            res.status(200).json(houseList);
        })
        .catch(error => console.error('Error in getHouses SQL query:', error));
    },
    // add house 
    addHouse: (req, res) => {
        const db = req.app.get('db');
        
        db.add_house(req.body)
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