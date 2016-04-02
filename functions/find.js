//In this file I will explore and practice using the underscore 
//functions: find and filter. These functions are used to find a 
//value or filter a collection of values based on some criteria.

//=*=*=FIND=*=*=

//Create colors array for practice purposes.
var colors = ['red', 'black', 'yellow', 'blue', 'orange'];

//With _find, you pass in the collection to iterate over and then 
//provide a callback function ('find algorithm') to find the FIRST 
//item that matches.
var item = _.find(colors, function(item) {
    return String(item).length > 5;
})
// ==> yellow

//=*=*=FILTER=*=*=

//Filter is similar to find, but instead of simply returning the 
//first item that matches, it returns all matches (in new array).
var item2 = _.filter(colors, function(item) {
    return String(item).length > 5;
})
// ==> ["yellow", "orange"]
