const mongoose = require('mongoose')

const ReserveSchema = new mongoose.Schema({
    book_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    author:{
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

const Reservation = new mongoose.model("Reservation",ReserveSchema);

module.exports = Reservation;