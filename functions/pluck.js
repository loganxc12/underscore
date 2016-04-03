//In this file I will explore and practice using the underscore 
//functions: pluck and shuffle. 

//=*=*=PLUCK=*=*=

//Pluck allows you to have a collection of objects, specify a property
//that's common to all the objects, and then extract out an array of 
//values for that property for each object. Grab values for particular 
//property and put them into array.

var cars = [
    {make: "Ford", color: "red"},
    {make: "BMW", color: "green"},
    {make: "Lexus", color: "black"},
    {make: "Kia", color: "blue"}
]

var result = _.pluck(cars, 'make');
// ==> ["Ford", "BMW", "Lexus", "Kia"]

//=*=*=SHUFFLE=*=*=

//Shuffle is a little function that allows you to take a list and 
//'shuffle' its order/provide random order to array elements.

var shuff = _.shuffle(_.range(10));
// ==> [4, 3, 6, 7, 5, 0, 1, 8, 2, 9]