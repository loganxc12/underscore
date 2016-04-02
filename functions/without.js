//In this file I will explore and practice using the underscore 
//functions: without, union, intersection and difference.

//Create array of colors for practice purposes.
var colors = ["red", "blue", "green", "yellow", "black", "red"];

//=*=*=WITHOUT=*=*=

//Without allows us to specify an array, and then specify the items
//we'd like to 'go without'/have taken out of that array.
var noRed = _.without(colors, "red", "green");
// ==> ["blue", "yellow", "black"]

//=*=*=UNION=*=*=

//Union allows us to combine multiple arrays together into one large
//array with no duplicates - 'unites' arrays (without duplicates).
var moColors = _.union(colors, ["blue", "brown", "pink"], ["orange", "red"]);
// ==> ["red", "blue", "green", "yellow", "black", "brown", "pink", "orange"]

//=*=*=INTERSECTION=*=*=

//Intersection allows us to take multiple arrays and look for items that 
//are in each of those arrays, forming an 'intersection'. 
var intersectingColors = _.intersection(colors, ["blue", "black", "pink"]);
// ==> ["blue", "black"]

//=*=*=DIFFERENCE=*=*=

//Difference allows us to take multiple arrays and find the 'difference' 
//between them, the items that they DON'T share in common. Sort of like 
//opposite of intersection.

var diffColors = _.difference(colors, ["blue", "yellow"], ["red"]);
// ==> ["green", "black"]