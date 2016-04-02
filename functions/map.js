//In this file I will explore and practice using the underscore 
//function: map.

//_.map allows us to iterate over a collection (typically an array or 
//object) and perform some kind of transformation on each item and then 
//return a new array of transformed data. 

//Create array of colors.
var colors = ["red", "blue", "green", "black"];
//Create generic object.
var obj = {
    name: "Bob",
    age: 90,
    weight: 800,
    hairColor: "red"
};

var transformedColors = _.map(colors, function(value, key, items) {
    return String(value).toUpperCase();
})
// ==> ["RED", "BLUE", "GREEN", "BLACK"]

var transformedObj = _.map(obj, function(value, key, items) {
    return String(key).toUpperCase();
})
// ==> ["NAME", "AGE", "WEIGHT", "HAIRCOLOR"]

//As an aside, you can also use _.map on an 'DOM element node list'.