//In this file I will explore and practice using the underscore 
//function: toArray. This function allows us to pass in an object 
//and it will convert it to an array.

var obj = {
    firstName: "Bob",
    lastName: "Smith",
    age: 23,
    height: "tall"
}

var objToArray = _.toArray(obj);
// ==> ["Bob", "Smith", 23, "tall"]