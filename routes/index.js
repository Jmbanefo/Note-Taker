const router = require('express').Router(); 
const getNotes = require('./notes')
const api = require('./api')


router.use('/notes', getNotes); 
router.use('/api/notes', api); 


module.exports = router;