//In this file I will explore and practice using the underscore 
//functions: sample and size. 

//=*=*=SAMPLE=*=*=

//Sample goes into the collection you specify and randomly selects 
//the number of items you ask for (with no repeated items).

var numbers = [1,2,3,4,5,6,7,8,9];
var result = _.sample(numbers, 3);
// ==> [8,9,4]
var result2 = _.sample(numbers, 1);
// ==> [4]

//=*=*=SIZE=*=*=

//The _.size function simply calculates the length of an array (or the 
//number of properties on an object).

var obj = {
    firstName: "Eric",
    lastName: "Smith",
    age: 23
}

var size = _.size(obj);
// ==> 3
var numSize = _.size(numbers);
// ==> 9
