const Book = require("../models/books.model");
const express = require("express");

const router = express.Router();

router.get("/", async (req,res)=>{
    try{
        let page = +req.query.page || 1;
        let limit = +req.query.size || 20;
        let skip = (page-1)*limit;
        let books = await Book.find().skip(skip).limit(limit).lean().exec();
        
        return res.send(books);

    }catch(e){
        return res.status(400).json({status: "failed", message: e.message });
    }
    

})

router.post("/search", async (req,res)=>{
    try{
        let quary = req.body.quary;
        let quarys= quary.split(" ");
        let findAllQuary =[];
        quarys.forEach(el=>{
            findAllQuary.push({title: {$regex: String(el)}});
        })
        
        let books = await Book.find({$or: findAllQuary }).limit(30).lean().exec();
        
        return res.send(books);

    }catch(e){
        return res.status(400).json({status: "failed", message: e.message });
    }
    

})

router.get("/:id", async (req,res)=>{
    try{
        
        let books = await Book.findById(req.params.id).lean().exec();
        
        return res.send(books);

    }catch(e){
        return res.status(400).json({status: "failed", message: e.message });
    }
    

})

router.get("/catagory/:id", async (req,res)=>{
    try{
        let page = +req.query.page || 1;
        let limit = +req.query.size || 20;
        let skip = (page-1)*limit;
        let books = await Book.find({categories:req.params.id}).skip(skip).limit(limit).lean().exec();
        let allbooks=await Book.find({categories:req.params.id}).lean().exec();
        
        return res.json({books:books, totalbooks:allbooks.length});

    }catch(e){
        return res.status(400).json({status: "failed", message: e.message });
    }
    

})

router.get("/before-year/:id", async (req,res)=>{
    try{
        let page = +req.query.page || 1;
        let limit = +req.query.size || 20;
        let skip = (page-1)*limit;
        let books = await Book.find({publishedDate:{$lt: req.params.id}}).skip(skip).limit(limit).lean().exec();
        let allbooks=await Book.find({publishedDate:{$lt: req.params.id}}).lean().exec();
        
        return res.json({books:books, totalbooks:allbooks.length});

    }catch(e){
        return res.status(400).json({status: "failed", message: e.message });
    }
    

})

module.exports = router;