const router = require('express').Router()
const mongo = require('mongoose')
const Reservation = require('../Models/Reservations')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/",async(req,res)=>{
    try{

        const reserveData = await Reservation.find();
        res.send(reserveData);

    }catch(err){
        res.send(err);
    }
})

router.get("/get/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const reserveData = await Reservation.find({user_id:id});

        if(!id){
            return res.status(400).send();
        }

        res.send(reserveData);

    }catch(err){
        res.send(err);
    }
})

router.post("/insert",async(req,res)=>{
    try{
        const newreserve = new Reservation(req.body);

        const saveReserve = await newreserve.save();

        res.send(saveReserve);

    }catch(err){
        res.send(err);
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id  = req.params.id;
        const deleteBook = await Reservation.findByIdAndDelete(_id);
        
        if(!_id){
            return res.status(400).send();
        }
        
        res.send(deleteBook);

    }catch(err){
        res.send(err);
    }

})

module.exports = router;
