const router = require('express').Router()
const mongo = require('mongoose')
const Borrowing = require('../Models/Borrowing')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/",async(req,res)=>{
    try{

        const borrowData = await Borrowing.find();
        res.send(borrowData);

    }catch(err){
        res.send(err);
    }
})

router.get("/get/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const borrowData = await Borrowing.findById(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(borrowData);

    }catch(err){
        res.send(err);
    }
})

router.post("/insert",async(req,res)=>{
    try{
        const newborrow = new Borrowing(req.body);

        const saveBorrow = await newborrow.save();

        res.send(saveBorrow);

    }catch(err){
        res.send(err);
    }
})

module.exports = router;
