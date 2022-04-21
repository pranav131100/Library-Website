const router = require('express').Router()
const mongo = require('mongoose')
const Book = require('../Models/Book')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/",(req,res)=>{
    try{

        const bookData = await Book.find();
        res.send(bookData);

    }catch(err){
        res.send(err);
    }
})

router.get("/get/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const bookData = await Book.findById(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(bookData);

    }catch(err){
        res.send(err);
    }
})


module.exports = router;