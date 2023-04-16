const router = require('express').Router(); 
const getNotes = require('./notes')

router.use('/notes', getNotes); 


module.exports = router; 