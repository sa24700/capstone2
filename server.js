const express = require('express');

const bcrypt = require('bcrypt');
const multer = require('multer');

app = express();
  

///////////////////////////////
///
///   multer initializations 
///
///////////////////////////////

 
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, './public/uploads/');
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});

var upload = multer({ storage: storage })

var newsletterStorage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, './public/uploads/newsletter/');
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});

var newsletterUpload = multer({ storage: newsletterStorage })

var imgStorage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, './public/uploads/images/');
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});

var imgUpload = multer({ storage: imgStorage })

require( 'dotenv').config();
const port = process.env.PORT || 5001;
app.use(express.json());
 
const cors = require('cors');
const corsOptions = {
  origin: "http://localhost:3000",
  originSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use("/images", express.static("./public/uploads/images"));


///////////////////////////////
///
///   database initializations 
///
///////////////////////////////



const Blog = require('./models/BlogSchema');
const NewUser = require('./models/UserSchema');
const Event = require('./models/EventSchema');
const Newsletter = require('./models/NewsletterSchema');
const Image = require('./models/ImgSchema');

const mongoose = require('mongoose');
const mongooseUri = process.env.MONGO_CRED;
mongoose.connect(mongooseUri,{useNewUrlParser: true},{useUnifiedTopology: true});


///////////////////////////////
///
///   SendInBlue API initializations 
///
///////////////////////////////


 
const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();




///////////////////////////////
///
///   Calls for the newsletter 
///
///////////////////////////////



app.post('/newsletter', function(req,res){
 
    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = req.body.email;
    createContact.language = req.body.language;
    createContact.listIds = [2];
    apiInstance.createContact(createContact).then(function(data) {
      console.log('User was successfully added.');
    }, function(error) {
      console.error(error);
    });

});
 

app.post('/sendNewsletter',  async function(req,res){
    
  
  const newsEntry = new Newsletter({
    title: req.body.title,
    content: req.body.content,
    date: new Date( ).toISOString(),
    language: req.body.language
     
});

    await newsEntry.save();

    await apiInstance.getContacts().then(function(data) {
      var contacts = data.contacts;
      var languageContacts = new Array(); 

    for(var i = 0; i < contacts.length; i++){   
      temp = contacts[i].attributes.LANGUAGE;
     
      if(temp === req.body.language){
        languageContacts.push(temp[i]);
      }
  }
  


  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

    "sender":{ "email":"amato.shawn@yahoo.com", "name":"Fairmont Community Partnership Group Inc"},
    "subject": req.body.title,
    "templateId":2,
    "params":{
       "title":req.body.title,
       "content":req.body.content
    },
    "to": languageContacts,
    "scheduledAt":req.body.startTime
   

    }).then(function(data) {
    console.log(data);
    }, function(error) {
    console.error(error);
    });

}, function(error) {
  console.error(error);
}); 


});

app.post('/uploadNewsletter', newsletterUpload.single("newsletter") ,function(req,res)  {

  var uploadNewsletter = req.body.newsletter;
  res.status(200).send(uploadNewsletter);

});


app.get('/getNewsletter/:newsletter', function(req,res){
  console.log("params " +  __dirname+'/public/uploads/newsletter/'+req.params.newsletter);
  res.download( './public/uploads/newsletter/'+req.params.newsletter);

});

///////////////////////////////
///
///   Calls for signup and Register 
///
///////////////////////////////

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

///////////////////////////////
///
///   Calls for the Blog 
///
///////////////////////////////

app.post('/createPost', async function(req,res){
  console.log("create post data " + req.body)
    const blogEntry = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: new Date( ).toISOString(),
        files: req.body.fileName
    });

    await blogEntry.save();

});

app.post('/createPost/singleFile', upload.single("file"), async function(req,res){
  console.log("singleFile data " + JSON.stringify(req.body))
  const file = req.file 

  if(file){
    
  
    const blogEntry = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: new Date( ).toISOString(),
        files: req.body.fileName
    });

    await blogEntry.save();
    var FileName = req.body.fileName;
    res.status(200).send(FileName);
  }
  else {
    throw new   Error("File failed to upload");
  }
});

app.post('/createPost/manyFiles', upload.array("file", 20), async function(req,res){
  console.log("multiple files data " + JSON.stringify(req.body))
    const blogEntry = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: new Date( ).toISOString(),
        files: req.body.fileName
    });

    await blogEntry.save();

});

app.get('/showAllBlogPosts', async function(req,res){
  try{
      
    const allPosts = await Blog.find();
    
     res.end(JSON.stringify(allPosts));
  }
  catch(e){
    console.log(e);
  }

});
app.get('/getPost/:key', async function(req,res){
  try{ 
      
    var blogID = await Blog.find({_id: req.params.key})
     blogID = JSON.stringify(blogID);
     res.end(blogID);

   
  }
  catch(e){
    console.log(e);
  }
 
});

app.get('/getFile/:file', function(req,res){
  console.log("params " +  __dirname+'/public/uploads/'+req.params.file);
  res.download( './public/uploads/'+req.params.file);

});
///////////////////////////////
///
///   Calls for the calendard 
///
///////////////////////////////

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

///////////////////////////////
///
///   Gallery function 
///
///////////////////////////////

app.post('/uploadPhoto', imgUpload.single('file'), async function(req,res){
 console.log("here is content " + JSON.stringify(req.body.fileName));
 const file = req.file;

  if(file){
    const newImage = new Image({
      title: req.body.title,
      imgPath: req.body.fileName,
      content: req.body.content,
      albumName: req.body.album

    })

    await newImage.save();

    var uploadImage = req.body.image;
    res.status(200).send(uploadImage);
  }
  else {
    throw new   Error("Image failed to upload");
  }
});


app.get('/getPhotos', async function(req,res){
  
  try{
    const gallery = await Image.find({});
    console.log("gallery " + gallery);
     res.end(JSON.stringify(gallery));
  }
  catch(e){
    console.log(e);
  }

});

app.get('/getPhoto/:file', function(req,res){
  console.log("params " +  __dirname+'/public/uploads/images/'+req.params.file);
  res.end( '/public/uploads/images/'+req.params.file);

});

///////////////////////////////
///
///   listening function 
///
///////////////////////////////


app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
  )
  