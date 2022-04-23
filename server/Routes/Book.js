const router = require('express').Router()
const mongo = require('mongoose')
const Book = require('../Models/Book')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/",async(req,res)=>{
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

router.post("/insert",async(req,res)=>{
    try{
        const newbook = new Book(req.body);

        const saveBook = await newbook.save();

        res.send(saveBook);

    }catch(err){
        res.send(err);
    }
})

router.patch("/update/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateBook = await Book.findByIdAndUpdate(_id,req.body,{
            new :true
        })

        res.send(updateBook);
    }
    catch(err){
        res.status(400).send(err);
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id  = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(_id);
        
        if(!_id){
            return res.status(400).send();
        }
        
        res.send(deleteBook);

    }catch(err){
        res.send(err);
    }

})

router.get("/count",async(req,res)=>{
    try{
        const bookData = await Book.find().distinct("type");
        res.send(bookData);

    }catch(err){
        res.send(err);
    }
})

router.get("/getype/all",async(req,res)=>{

    try{

        const bookData = await Book.find();
        res.send(bookData);

    }catch(err){
        res.send(err);
    }
})

router.get("/getype/:type",async(req,res)=>{

   

    try{
        
        const type = req.params.type

        const bookData = await Book.find({type:type});

        res.send(bookData);

    }catch(err){
        res.send(err);
    }
})



module.exports = router;