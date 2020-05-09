const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    todo: {type: String, required: true},
},{timestamps: true});

// Create Model from our Schema
const ToDo = mongoose.model('ToDo', toDoSchema);

// Export ToDo model
module.exports = ToDo;