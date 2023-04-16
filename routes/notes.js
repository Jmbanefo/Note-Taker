const router = require('express').Router(); 
const util = require('util'); 
const fs = require('fs'); 
const { v4: uuidv4 } = require('uuid'); 
const { format } = require('path');


const writeToFile = util.promisify(fs.writeFile); 
const readFromFile = util.promisify(fs.readFile); 


router.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) =>
    res.json(JSON.parse(data))); 
}) 

router.post('/', (req, res) => { 
    const {title, text} = req.body; 
    const newNote = { 
        title, 
        text, 
        id: uuidv4(), 
    };
    readFromFile('./db/db.json')
    .then((data) =>
    JSON.parse(data).push(newNote))
    writeToFile('./db/db.json', JSON.parse(data))
    res.json(JSON.parse(data))

})

// router.delete('/notes/:id', (req, res) => { 
//     const deleteID = req.params.id; 

// })

module.exports = router; 

