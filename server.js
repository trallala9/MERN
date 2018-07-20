const express = require('express');//our backend framework
const mongoose = require('mongoose');
const bodyParser = require('body-parser');//allow us to take requests and get data from the body

const items = require('./routes/api/items');
//initialise express into variable called app
const app = express();
//Bodyparser Middleware
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))//callback
    .catch(err => console.log(err));
//Use Routes
app.use('api/items', items);
//define port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
// we could create routes in server.js file like app.get API items or get,but we keep it separate in a folder api(items.js)
