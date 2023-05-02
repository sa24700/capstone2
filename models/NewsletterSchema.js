const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const newsletterSchema = new Schema({
 title: String,
 content: String,
 date: Date,
 language: String,
 path: String
});

const Newsletter = model('Newsletter', newsletterSchema);
module.exports= Newsletter;