//In this file I will explore and practice using the underscore 
//function: invoke. This function allows us to execute a function 
//for every item in a collection.

//Create a range of numbers from 0 - 9.
var nums = _.range(10);

//Define function to raise numbers to a power.
function power(exponent) {
    return Math.pow(this, exponent);
}

//Call _.invoke, pass in the collection to iterate over (nums),
//the function to invoke (power), and the arguement to give the 
//function (2). To achieve this, underscore uses .apply() to set
//the value of 'this'.
var result = _.invoke(nums, power, 2);
// ==> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]