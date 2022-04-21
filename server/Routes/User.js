const router = require('express').Router();
const mongo = require('mongoose')
const User = require('../Models/User')
const bcrypt = require('bcryptjs');

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.post('/register',async (req,res)=>{
    
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const conpass = req.body.conpass;
    
    if(password === conpass){
        const RegisterUser = new User({
            name:name,
            email:email,
            password:password,
            confirm_password:conpass
        })

        const token = await RegisterUser.generateAuthToken();
    
        const registered  = await RegisterUser.save();
        res.send(registered);
    }
    else{
        res.send("Passwords are not matching.");
    }
        
    }catch(err){
        console.log(err);
    }
    
})

router.post("/login",async(req,res)=>{
    
    try{
        let token;
        const email = req.body.email;
        const password = req.body.password;

        const dbuser = await User.findOne({email:email});

    if(dbuser){
        const isMatch = await bcrypt.compare(password,dbuser.password);
        token = await dbuser.generateAuthToken();
        
        if(isMatch){
            res.status(200).send({dbuser,token});    
        }
        else{
            res.status(400).json({ error : "Invalid Login credentials"});
        }
    }
    else{
            res.status(400).json({ error : "Invalid Login Credentials"});
    }
    
}catch(err){
        res.send(err);
    }

})

router.get("/get/:userId",async(req,res)=>{
    try{
        const userId = req.params.userId;
       

        const user = await User.findOne({_id:userId});

        res.send(user);

    }catch(err){
        res.status(400).send(err)
    }
})

module.exports = router
