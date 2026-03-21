const express =require('express');
const router = express.Router();
const MenuItem = require ('./../MODELS/menuitem');

//post route to add a menuiteam
router.post('/',async(req,res)=>{
    try{
        const content = req.body
        const newMenu = new MenuItem(content);
        const deposite = await newMenu.save();
        
        console.log('data  is having saved');
        res.status(200).json(deposite);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server  has been error'})
        
    }
})
//get method to get the person 
 router.get('/',async(req,res)=>{
   try{
     const data = await MenuItem.find();
     console.log('data fetched');
     res.status(200).json(data);
    
   }catch(err){
     console.log(err);
     res.status(500).json({error: 'internal server error'})

   }
 })
 
 // menuItem taste of the  type
 
 router.get('/:taste',async(req,res)=>{
   try{
     
    
   }catch(err){
     
   }
 })


// comment added for testing purpose
module.exports = router;