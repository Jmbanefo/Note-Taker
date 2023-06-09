const router = require('express').Router();
const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { format } = require('path');
const { log } = require('console');


const writeToFile = util.promisify(fs.writeFile);
const readFromFile = util.promisify(fs.readFile);


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json')
        .then((data) =>
            res.json(JSON.parse(data)));
})

router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };

    readFromFile('./db/db.json', 'utf-8').then((data) => {
        console.log(newNote)
        console.log(typeof (data))
        const parsedData = JSON.parse(data);
        console.log(parsedData)
        parsedData.push(newNote)
        console.log("New Data", parsedData)
        writeToFile('./db/db.json', JSON.stringify(parsedData))
        res.json((parsedData))
    })
})


router.delete('/notes/:id', (req, res) => { 
    const deleteID = req.params.id; 
    console.log(deleteID)
    const noted = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); 
    console.log(noted)
    const deletedNote = noted.filter((noted) => noted.id !== deleteID); 
    console.log(deletedNote);
    fs.writeFile("./db/db.json", JSON.stringify(deletedNote), (err) => {
        if(err) {
            console.log(err)
        }
    }); 
    res.json(deletedNote)

}) 

module.exports = router;

