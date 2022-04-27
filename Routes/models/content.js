const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    hash : {
        type : String,
        required : [true, "Something has gone wrong"]
    },
    data : {
        type : String,
    }
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;