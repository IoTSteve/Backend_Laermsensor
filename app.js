const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mqtt = require('mqtt');
const dbhandler = require('./databasehandler');
require('dotenv/config');




//mqtt

//var client  = mqtt.connect("mqtt://test.mosquitto.org",{clientId:"soundsensetest"});
//client.on("connect",function(){	
//console.log("connected to mqtt");
//});


 var client = mqtt.connect("mqtt://eu.thethings.network:1883",{ 
 clientId:"soundsenstest1",
 username:"lora_soundsense",
 password:process.env.TTN_KEY,
 clean:true
 });

 client.on("connect", function(){ 
 console.log("connected to mqtt");
 client.subscribe("lora_soundsense/devices/loransense1/up"); //+ wenn ich alle abfangen will. wildcard
 });

client.on('message', function (topic, message) {
  // message is Buffer
  const data = JSON.parse(message.toString());
  console.log(data);
  dbhandler.savedb({
    app_id: data.app_id,
    dev_id: data.dev_id,
    payload_fields: data.payload_fields,
    metadata: data.metadata
  })
  .then((res) => console.log(res)).catch((err) => console.error(err));
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