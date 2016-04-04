//In this file I will explore and practice using the underscore 
//function: sortBy. This function allows us to pass in a collection 
//of items and sort that collection based upon some value in the 
//collection.

//Here's a basic example of using _.sortBy to sort an array of 
//numbers...

var numbers = [4,1,7,9,3,2,8];
var sortedNums = _.sortBy(numbers);
// ==> [1, 2, 3, 4, 7, 8, 9]

//And here's an example of using _.sortBy to sort an array of 
//objects by a specified property...

var stooges = [
    {name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'curly', age: 60}
];

var sortedStooges = _.sortBy(stooges, 'name');
// ==> [Object, Object, Object] - 'curly', 'larry', 'moe'