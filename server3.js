// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','hi' +  user.username + '!\n',()=>{
//     console.log(' file is created');
    
// });

// console.log(fs);


const notes = require('./notes.js');
var _=require('lodash');
console.log("server file is available");

var age =  notes.age;
var result  = notes.addNumber(age+18,12);
console.log(age);
console.log('result is now'+ " " +result);

var data = ['person ','person',1,2,1,2,'name','name','age','2'];
var filter = _.uniq(data);
console.log(filter);



