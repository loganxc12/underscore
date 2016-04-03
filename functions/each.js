//In this file I will explore and practice using the underscore 
//function: each. The purpose of the _.each function is to iterate
//over a collection of items (array, object etc.) and perform some 
//kind of manipulation/computation etc. on each element. Similar
//to the JS function forEach.

var colors = ['red', 'blue', 'yellow', 'white'];

var obj = {
    name: "Bob",
    age: 32,
    weight: 150,
    eyeColor: "brown"
}

_.each(obj, function(value, key, items) {
    
    //console.log(key + " = " + value);
})
// ==> 
// name = Bob
// age = 32
// weight = 150
// eyeColor = brown
