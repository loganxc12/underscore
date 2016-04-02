//In this file I will explore and practice using the underscore 
//functions: first, initial, last and rest. These functions are 
//used to quickly retrieve parts of arrays. 

//Create array of colors for practice purposes.
var colors = ["red", "blue", "yellow", "black"];

//=*=*=FIRST=*=*=

//Get the first element from the colors array and assign it to the 
//variable firstItem
var firstItem = _.first(colors);
//Get the first three elements from the colors array and assign them 
//to the variable first3.
var first3 = _.first(colors, 3);
//It's also important to note that _first has two aliases: '_head' 
//and '_take' which do the same thing.

//=*=*=INITIAL=*=*=

//Initial retrieves all the elements in an array EXCEPT FOR THE 
//LAST ONE. Gets the 'inital' elements. If we call it on colors 
//array we'll get all but black.
var initial = _.initial(colors);
//If we give it a number as a second arguement, we'll get all but 
//the last x number of elements. 
var allButLast2 = _.initial(colors, 2);

//=*=*=LAST=*=*=

//Last retrieves the last element in an array. If we pass a number 
//as the second arguement we'll get the last x number of elements.
//Opposite of first.
var lastItem = _.last(colors);
var last3 = _.last(colors, 3);

//=*=*=REST=*=*=

//Rest retrieves the 'rest' of the elements, skipping the first one
//by default (or whatever number we pass in). Opposite of initial.
var allButFirst = _.rest(colors);
var allButFirst2 = _.rest(colors, 2);
//Rest also has two aliases: '_tail' and '_drop'