const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    Fname : {
        type: String,
        required: true
    },
    Lname : {
        type: String,
    },
    Phone : {
        type: Number,
        required: true
    },
    Email : {
        type: String,
        required: true
    },
    Password : {
        type: String,
        required: true
    },
    img : {
        data : Buffer,
        contenType : String
    }
})

const Subscriber = mongoose.model("Subscriber",subscriberSchema);


module.exports = Subscriber;