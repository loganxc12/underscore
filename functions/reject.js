//In this file I will explore and practice using the underscore 
//functions: reject, some and every. Like find, filter, contains
//and other functions I've looked at, these functions allow you 
//to iterate over a collection and check/manipulate items based 
//on some 'predicate function' or desired criteria.

//Create array of numbers.
var nums = [1, 2, 3, 4, 5, 6, 7, 8];

//=*=*=REJECT=*=*=

//With _.reject, if the callback function returns true, then the 
//item is 'rejected'/not included in the result. If it returns false, 
//then it is added to the result.
var reject = _.reject(nums, function(value, index, array) {
    return value > 5;
})
// ==> [1, 2, 3, 4, 5] - callback returned true for 6, 7, and 8
//therefore they were NOT included in the result. Kind of like 
//the opposite of _.filter

//=*=*=SOME=*=*=

//_.some checks if there is AT LEAST ONE ITEM in the collection 
//that matches the condition in the callback function.

var some = _.some(nums, function(value, index, array) {
    return value > 5;
})
// ==> true

//=*=*=EVERY=*=*=

//_.every checks if EVERY ITEM in the collection matches the 
//condition in the callback function.

var every = _.every(nums, function(value, index, array) {
    return value > 0;
})
// ==> true