const mongoose = require('mongoose')

const BorrowSchema = new mongoose.Schema({
    book_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    time:{
        type:String,
    },
    date:{
        type:String,
        required:true
    }

})

const Borrowing = new mongoose.model("Borrowing",BorrowSchema);

module.exports = Borrowing;