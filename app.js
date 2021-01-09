const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//MIDDLEWARE

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