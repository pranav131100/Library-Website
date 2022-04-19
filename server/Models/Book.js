const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
},
img:{
    type:String,
    required:true
},
link:{
    type:String,
    required:true
}

})

const Book = new mongoose.model("Book",BookSchema);

module.exports = Book;