
//Object data modelling library for mongo
const mongoose = require('mongoose');

//Mongo db client library
const MongoClient  = require('mongodb');

//Express web service library
const express = require('express')

//used to parse the server response from json to object.
const bodyParser = require('body-parser');

//instance of express and port to use for inbound connections.
const app = express()
const port = 3000

//connection string listing the mongo servers. This is an alternative to using a load balancer. THIS SHOULD BE DISCUSSED IN YOUR ASSIGNMENT.
const connectionString = 'mongodb://localmongo1:27017,localmongo2:27017,localmongo3:27017/notflixDB?replicaSet=rs0';


//checking rmq alive and running
var leader = false;
var rMQrunning =false;
var amqp =require('amqplib/callback_api'); //in test folder
var alive = true;
var currentTime = new Date().toLocaleString(); //getting time 

var nodeID = Math.floor(Math.random() * (100 -1 + 1)+1);
var nodeInfo = {nodeID: nodeID, lastMessageTime: currentTime};
var listNodeInfo=[];
listNodeInfo.push(nodeID);//add current 


setInterval(function() {

//  console.log(`Intervals are used to fire a function for the lifetime of an application.`);
amqp.connect('ampq://user:bitnami@cloud_week1_haproxy_1'), function(error0, connection){
  //if error
  if (error0){
    throw error0;
  }
//create connection and send message to alive nodes

connection.createChannel(function(error1, channel){
  if(error1){
    throw error1;
  }
  var exchange = 'Node is alive';
  currentTime = new Date().toLocaleString(); //getting time 
 var message = '{"nodeID": "${nodeID}"}'
});
}
}, 3000);

//tell express to use the body parser. Note - This function was built into express but then moved to a seperate package.
app.use(bodyParser.json());

//connect to the cluster
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var interactionSchema = new Schema({//changed to match
  Acc_ID: Number,
  User_Name: String,
  Title_ID: String,
  User_Action: Number,
  dateTime: Date,
  interactionPoint: String,
  interactionType: String
});

var InteractionsModel = mongoose.model('Interactions', interactionSchema, 'interactions');



app.get('/', (req, res) => {
  stockModel.find({},'accountID username titleID userAction DateTime interactionPoint interactionType', (err, stock) => {
    if(err) return handleError(err);
    res.send(JSON.stringify(interactionSchema))
  }) 
})

app.post('/',  (req, res) => {
  var awesome_instance = new InteractionsModel(req.body);
  awesome_instance.save(function (err) {
  if (err) res.send('Error');
    res.send(JSON.stringify(req.body))
  });
})

app.put('/',  (req, res) => {
  res.send('Got a PUT request at /')
})

app.delete('/',  (req, res) => {
  res.send('Got a DELETE request at /')
})

//bind the express web service to the port specified
app.listen(port, () => {
 console.log(`Express Application listening at port ` + port)
})

