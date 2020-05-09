// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');


// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});


// Middleware
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method')); // to inform that _method is to use alternate method mentioned


// Mongoose Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-2-assessment';
mongoose.connection.once('open', () => {
    console.log('Connected to mongo');
});

const toDoController = require('./controllers/to-do.js');
app.use('/todo', toDoController);

// Port Listener
app.listen(PORT, () => {
    console.log('Listening on :', PORT);
});