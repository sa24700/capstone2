const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: String,
 
 author: String,
 content: String,
 date: Date,
 files:  [{
  type: String
}]

});

const Blog = model('Blog', blogSchema);
module.exports= Blog;