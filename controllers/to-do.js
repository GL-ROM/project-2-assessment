const express= require('express');
const router = express.Router();
const ToDo = require('../models/to-do-list.js');

//Index Route
router.get('/', (req, res) => {
    ToDo.find({},(err, allToDo) =>{
        res.render('Index', {toDos: allToDo});
    });
});

// Create Route /post
router.post('/', (req, res) => {
    ToDo.create(req.body, (error, createdToDo) =>{
        // Once created - respond to client
        res.redirect('/todo');
    })    
});

// Delete Route
router.delete('/:id', (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, (error, deletedToDo) => {
        res.redirect('/todo');
    })
});


// Export router
module.exports = router;