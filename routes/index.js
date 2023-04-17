const router = require('express').Router(); 
const getNotes = require('./notes')
const api = require('./api')


router.use('./', getNotes); 
router.use('./notes', api); 


module.exports = router;