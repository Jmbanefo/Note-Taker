const router = require('express').Router(); 
const util = require('util'); 
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile); 
const readFromFile = util.promisify(fs.readFile)

router.get('/', (req, res) => { 
    readFromFile ('./db/db.json')
            .then((data) =>
                res.json(JSON.parse(data))); 

})

module.exports = router; 