//In this file I will explore and practice using the underscore 
//functions: reduce and reduceRight. These functions are used to
//'reduce' a collection of items down to a single value.

//Create an array of numbers and an array of colors (strings).
var numbers = [1, 2, 3, 4, 5];
var colors = ["red", "blue", "green", "yellow"];

//=*=*=REDUCE=*=*=

var value = _.reduce(numbers, function(lastReducedValue, item) {
    return lastReducedValue + item;
})
// ==> 15

//=*=*=REDUCE RIGHT=*=*=

//Does the same thing as reduce, but in reverse order (starting from 
//the RIGHT side).