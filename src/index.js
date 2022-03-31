const express = require('express');

var bodyParser = require('body-parser');

const route = require('./routes/route.js');

var multer = require('multer') // HERE

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any()) // HERE



const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ManojKoli:ManojKoli@cluster0.kwqvp.mongodb.net/group30Database?authSource=admin&replicaSet=atlas-sncxo8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true })
    .then(() => console.log('vikash you connected with db'))
    .catch(err => console.log(err))

app.use('/', route);




app.listen(process.env.PORT || 3000, function() {
    console.log('hello vikash your port is running ' + (process.env.PORT || 3000))
});