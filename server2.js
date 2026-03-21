console.log(" server file is running");
// learn how to declare function in javascript

// function add(a,b) {
//     return a+b;
// }

// or 
// var  add = function (a,b) {
//     return a+b;
// }

//or
//var add = (a,b)=>{return a+b;}

// or 

// var add = (a,b)=>a+b;
// let result = add(12,77);
// console.log(result);

// callback function
// function callback() {
//     console.log("pyiush is calling a callback function");
    
// }
// const add = function (a,b,callback) {
//     var result = a+b;
//     console.log('result'+result);
//     callback();

// }
// add(3,4,callback);

// shortes way to write callback function
const add = function (a,b,piyush) {
    var result = a+b;
    console.log('result'+result);
    piyush();

}
// add(3,4,function () {
//     console.log("add complete");
    
// });
//more sortest
add(2,3,()=>console.log('add successful'));