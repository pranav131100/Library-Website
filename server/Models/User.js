const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true,
        
        
    },
    confirm_password:{
        type:String,
        required:true
    },
    reservations:[
        {
            book_id:{
                type:String
            },
            date:{
                type:Date
            }
        }
    ],
    borrowings:[
        {
            book_id:{
                type:String
            },
            due:{
                type:Date
            }
        }
    ]  
})


userSchema.methods.generateAuthToken = async function(){
    try{

        const token = jwt.sign({_id : this._id},process.env.secret_key);
        return token;

    }catch(err){
        console.log(err);
    }
}

userSchema.pre("save",async function(next){

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirm_password  = await bcrypt.hash(this.password,10);
    }
    next();
})

const User = new mongoose.model("User",userSchema);

module.exports = User;