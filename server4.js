// here we have converted json to object
// const jsonString = '{"name":"john","age":45,"city":"Delhi"}';
// const jsonObject =JSON.parse(jsonString);
// console.log(jsonObject.name);

//now we have converted it object to json

const  objectToConvert ={
    name :"Alice",
    age:45
};
const json = JSON.stringify(objectToConvert);
console.log(json);
