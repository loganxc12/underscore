//In this file I will explore and practice using the underscore 
//functions: max and min. These functions allow us to find the 
//maximum and minimum values found within a collection.

//=*=*=MAX=*=*=

var max = _.max([1,2,3,4]);
// ==> 4
//If array is empty, returns '-Infinity'

//=*=*=MIN=*=*=

var min = _.min([1,2,3,4]);
// ==> 1
//If array is empty, returns 'Infinity'

//Can also be used with collections of objects using a callback 
//function that you can provide as a second arguement.