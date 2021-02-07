const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const apiPort = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
.then(()=>{
    console.log("Connected to the db");
})
.catch(err=>{
    console.log("Cannot connect to db");
});



const cryptoRouter = require('./routes/crypto');
app.use('/crypto', cryptoRouter);


app.listen(apiPort, () =>{
    console.log(`Server running on port ${apiPort}`);
});