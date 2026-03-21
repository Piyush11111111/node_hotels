//import express from 'express'

//import { size } from 'lodash'

const express =require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());// req.body




app.get('/', (req, res) => {
  res.send('Hello welcome to my hotel')
})

 
//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person',personRoutes);
app.use('/menuItem',menuItemRoutes);







 
  
  // actually this will not used 
  // newPerson.save((error,savePerson)=>{
  //   if(error){
  //     console.log('error saving person',error);
  //     res.status(500).json({error: 'internal server error'})
      
  //   }else{
  //     console.log('data saved successfully');
  //     res.status(200).json(savedPerson);
      
  //   }
  // })

// app.get('/ladu',(req,res)=>{
//     res.send("how much tasty thse laduus")
// })

// app.post('/person',(req,res)=>{
//   res.send("the person details are here");
// })

// app.get('/idli',(req,res)=>{
//     var customized_idli ={
//         name:'rava idli',
//         size:"10 cm diameter",
//         is_sambhar:true,
//         is_chatni:false

//     }
//     res.send(customized_idli)
// })

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})