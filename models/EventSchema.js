const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    userId: String,
    title: String,
    location: String,    
    start: String,
    end: String,

    street: String,
    city: String,
    state: String,
    zip: String,
    extraInfo: String
});

const Event = model('events', eventSchema);
module.exports= Event;