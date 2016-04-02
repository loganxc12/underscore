//In this file I will explore and practice using the underscore 
//functions: indexOf, lastIndexOf and sortedIndex.

//Create array of colors for practice purposes.
var colors = ["red", "blue", "green", "yellow", "black", "red", "blue", "purple", "white"];

//=*=*=INDEX OF=*=*=

//Similar to the javascript indexOf() method and fairly straightforward,
//returns the FIRST index value of a given element.
var blue = _.indexOf(colors, 'blue');
// ==> 1 - first arguement is the array to search, second element is the 
// element to find the index of.

//=*=*=LAST INDEX OF=*=*=

//Same as _indexOf, but starts at end of array instead of beginning, 
//finds and returns the LAST index of a given element.
var lastBlue = _.lastIndexOf(colors, 'blue');
// ==> 6
var secondtoLastBlue = _.lastIndexOf(colors, 'blue', lastBlue - 1);
// ==> 1

//=*=*=SORTED INDEX=*=*=

//Looks for correct index where you could insert a given value into a 
//list and the list would continue to be sorted.
var tens = _.range(0, 101, 10);
// ==> [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var whereToPut = _.sortedIndex(tens, 15);
// ==> 2
//Here's how you would actually insert the value using 'splice'...
tens.splice(_.sortedIndex(tens, 15), 0, 15);
// ==> [0, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100]