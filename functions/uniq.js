//In this file I will explore and practice using the underscore 
//function: uniq. This function is used to retrieve unique 
//elements from arrays. There are a few ways to use uniq...

//Create array of numbers for practice purposes.
var numbers = [1,1,1,1,2,2,2,3,4,5,5,5,6,7,7,7];
//Call _.uniq to sort out duplicates and assign a new array of 
//'uniques' to the uniqNums variable. Can use _.unique or _.uniq.
//Can optionally add 'true' arguement if dealing with sorted list, 
//uses faster optimized algorithm.
var uniqNums = _.uniq(numbers, true);
// ==> [1, 2, 3, 4, 5, 6, 7]

//=*=*=EXAMPLE TWO=*=*=

//Create array of strings for practice purposes.
var transport = ["car", "bus", "plane", "boat", "train", "bike", "bus", "car"];
//Call _.uniq to remove duplicates from transport array.
var uniqTransport = _.uniq(transport);
// ==> ["car", "bus", "plane", "boat", "train", "bike"]
//Uniq can also take a callback function as a second arguement (useful
//for sorting objects by properties).