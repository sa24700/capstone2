const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const imgSchema = new Schema({
    title: String,
    imgPath: String,
    content: String,
    albumName: String
});

const Image = model('Image', imgSchema);
module.exports= Image;