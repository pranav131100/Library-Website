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
type:{
 type:String,
 required:true
},
edition:{
    type:String,
   
},
description:{
    type:String,
    required:true
},
avail:{
    type:Number,
    required:true
},
img:{
    type:String,
    required:true
},
link:{
    type:String,
    required:true
},
about:{
    type:String
}

})

const Book = new mongoose.model("Book",BookSchema);

module.exports = Book;