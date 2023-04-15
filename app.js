//Set enviroment variables
const dotenv = require('dotenv'); //must be the first two lines of code
dotenv.config({ path: './config.env' });

//Template for Node.js Express Server
const express = require('express');

//Create Express App
const app = express();

const data = require('./data.json');

//Path module provides utilities for working file and directory paths
const path = require('path');

//dirname is the directory name of the current module
app.use(express.static(path.join(__dirname, 'public')));

//Set the view engine to ejs
app.set('view engine', 'ejs');

//Set the views directory
app.set('views', 'views');

//routes
app.get('/', (req, res) => {
    res.render('index', {data: data});
});

app.listen(3000, () => {
    console.log('Server running on port 3000...');
});
