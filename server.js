const express = require('express')
app = express()
const bcrypt = require('bcrypt')
require( 'dotenv').config();
const port = process.env.PORT || 5001
app.use(express.json());
const cors = require('cors');
app.use(cors());

const Blog = require('./models/BlogSchema');
const NewUser = require('./models/UserSchema');
const Event = require('./models/EventSchema');

     ////////////////////////////////
    //Database functions
    /////////////////////////////
const mongoose = require('mongoose');
const mongooseUri = process.env.MONGO_CRED;
mongoose.connect(mongooseUri,{useNewUrlParser: true},{useUnifiedTopology: true});

 
const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();






app.post('/newsletter', function(req,res){
 
    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = req.body.email;
    createContact.listIds = [2]

    apiInstance.createContact(createContact).then(function(data) {
      console.log('User was successfully added.');
    }, function(error) {
      console.error(error);
    });

     
 

});
app.post('/register',   function(req,res){
  
  const userName = req.body.userName;
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  var password = req.body.password;

  const salt = 10;
 bcrypt.hash(password, salt, async function(err, hash) {

       const user = new NewUser({
          userName:userName,
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:hash
     })
    await user.save();
  });

    
})
app.post('/login', async function(req,res){

    let user = req.body.userName;
    let pass = req.body.password;
    const foundUser = await NewUser.findOne({username: user});
        bcrypt.compare( pass, foundUser.password,function(err, result) {
            if(result == true){
              console.log("Access Permitted");
            }
            else{
              console.log("Access Denied")
            }
        });

    


});
app.post('/users', function(req,res){


});
app.post('/createPost', async function(req,res){
  console.log("create post data " + req.body)
    const blogEntry = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    });

    await blogEntry.save();

});
app.get('/showAllBlogPosts', async function(req,res){
  try{
      
    const allPosts = await Blog.find();
    console.log("allPosts " + allPosts);
     res.end(JSON.stringify(allPosts));
  }
  catch(e){
    console.log(e);
  }

});
app.post('/blog/:id', async function(req,res){
  try{
      
    const blogID = await Blog.find({_id: req.params.id});
     res.end(JSON.stringify(blogID));
  }
  catch(e){
    console.log(e);
  }

});

app.post('/createEvent', async function(req,res){
  console.log("log " + req.body)
    const newEvent = new Event({
        userId: req.body.userId,
        title: req.body.eventName,
        location: req.body.location,        
        start: req.body.startTime,
        end: req.body.endTime,

        street: req.body.street,
        city: req.body.city,
        state: req.body.myState,
        zip: req.body.zip,
        extraInfo: req.body.description, 

    });

    await newEvent.save();
  

});
app.post('/createEvent/:id', function(req,res){

});
app.get('/showEvents', async function(req,res){
  
  try{
    const eventsList = await Event.find({});
    console.log("events " + eventsList);
     res.end(JSON.stringify(eventsList));
  }
  catch(e){
    console.log(e);
  }

});

app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
  )
  