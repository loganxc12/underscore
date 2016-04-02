//In this file I will explore and practice using the underscore 
//function: contains. This function is used to determine whether 
//or not a value or an object exists within a collection.

//Create array of numbers.
var nums = [1, 2, 3, 4, 5, 6, 7, 8];

//At a basic level, using contains is pretty straightforward...
var result = _.contains(nums, 3);
// ==> true

//You can also use it with a collection of objects (though you 
//can't just search with object literal because it will point 
//to a different spot in memory, hence the variable below).
var blue = {color: "blue"};
var widgets = [{color: "red"}, blue, {color: "pink"}];
var result2 = _.contains(widgets, blue);
// ==> true