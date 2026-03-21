const express = require('express');
const router = express.Router();
const person = require('./../MODELS/person');

//post route to add a person 

 router.post('/',async(req,res)=>{
  try{
    const data = req.body //assuming the request body contains the person data
 
    //createing  a new person document using the mongoose model
    const newPerson =new person(data);
 
    // save the newPerson to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
   }
   catch(err){
     console.log(err);
     res.status(500).json({error: 'internal server error'})
    
   }
  
 })


// //get method to get the person 
 router.get('/',async(req,res)=>{
   try{
     const data = await person.find();
     console.log('data fetched');
     res.status(200).json(data);
    
   }catch(err){
     console.log(err);
     res.status(500).json({error: 'internal server error'})

   }
 })

//person work of the worktype
 router.get('/:workType',async(req,res)=>{
  try{
    const workType = req.params.workType;// extract the worktype from the url parameters
    if (workType == 'chef'|| workType == 'manager' || workType == 'waiter') {
      const response = await person.find({work:workType});
      console.log('response fetched');
      res.status(200).json(response);
      
    }else{
      res.status(404).json({error: 'invalid worktype'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal error server'})
    
  }
 })

 router.put('/:id',async(req,res)=>{
  try{
    const personId = req.params.id; // extract the id from the url parameters
    const updatedPersonData = req.body; //updated data from the person

    const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
      new:true, // return the updated document
      runValidators:true, // run mongoose validation
    })
    if (!response) {
      return res.status(404).json({error: ' person not found'});
    }

    console.log('data updated');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'})
    

  }
 });

 router.delete('/:id',async(req,res)=>{
  try{
    const personId =req.params.id; // Extract the person's ID from the URL  parameter

    //assuming you have a person model
    const response =await person.findByIdAndDelete(personId);
    if(! response){
      return res.status(404).json({error: 'person not find'});

    }
    console.log('data deleted');
    res.status(200).json({message: ' person deleted successfully'});

  }catch(err){
    console.log('data delete');
    res.status(500).json({error:'internal server error'});
  }
 })

 module.exports = router;