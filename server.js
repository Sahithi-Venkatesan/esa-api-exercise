//Sahithi Venkatesan - 18XJ1A0547
//ESA Assignment 2
var express = require('express'),

  app = express(),
  port = process.env.PORT || 3000,

  mongoose = require('mongoose'),

  users = require('./models/models-users'), 
  cart = require('./models/models-cart'), 
  products = require('./models/models-products'),

  bodyParser = require('body-parser');

require("dotenv").config();


//Db connection is through mongodb atlas
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…");
})
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing for microservice apis
var route_users = require('./routes/routes-users'); 
var route_products = require('./routes/routes-products');
var route_cart = require('./routes/routes-cart'); 

//Connecting it with the express module
route_users(app); 
route_products(app);
route_cart(app);

app.listen(port);

console.log('Server is running on port : ' + port);
