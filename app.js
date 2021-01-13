const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mqtt = require('mqtt');
require('dotenv/config');




//mqtt

//var client  = mqtt.connect("mqtt://test.mosquitto.org",{clientId:"soundsensetest"});
//client.on("connect",function(){	
//console.log("connected to mqtt");
//});


 var client = mqtt.connect("mqtt://eu.thethings.network:1883",{ 
 clientId:"soundsenstest1",
 username:"lora_soundsense",
 password:"TTN_KEY",
 clean:true
 });

 client.on("connect", function(){ 
 console.log("connected to mqtt");
 });








//MIDDLEWARE

app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)




//ROUTES
app.get('/', (req,res) => {
  res.send('We are on home');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{ useUnifiedTopology: false,
  useNewUrlParser: true},
 () => console.log('connected to db!')
 );

//start listening to the server
app.listen(3000);