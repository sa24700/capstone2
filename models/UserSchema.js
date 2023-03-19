const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: String,    
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String

});

const User = model('users', userSchema);
module.exports= User;