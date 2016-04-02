//In this file I will explore and practice using the underscore 
//functions: zip, object and range. 

//=*=*=ZIP=*=*=

//At a high level, _zip is used to merge together the values of multiple 
//arrays. Here's an example...
var z = _.zip([1, "John", "Smith"], [2, "Alice", "Taylor"], [3, "Bob", "Davis"]);
// ==> [Array[3], Array[3], Array[3]];
//Creates three arrays based on the index of elements in the original arrays.
//First array holds [1, 2, 3], second holds ["John", "Alice", "Bob"], and the 
//third holds ["Smith", "Taylor", "Davis"].

//=*=*=OBJECT=*=*=

//_Object is used to convert arrays into objects.
var o = _.object(["id", "firstName", "lastName"], [1, "Bob", "Smith"]);
// ==> Object {id: 1, firstName: "Bob", lastName: "Smith"}
//In the above example, the first array is used to define the properties of
//the newly-created object and the second defines the corresponding values.
//You can also use the following syntax (to get the same result)...
var o2 = _.object([["id", 1], ["firstName", "Bob"], ["lastName", "Smith"]]);
// ==> Object {id: 1, firstName: "Bob", lastName: "Smith"}

//=*=*=RANGE=*=*=

//Very useful function that allows you to generate a range of numbers fast.
var range = _.range(10);
// ==> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var range2 = _.range(2, 10);
// ==> [2, 3, 4, 5, 6, 7, 8, 9]
var range3 = _.range(0, 10, 2);
// ==> [0, 2, 4, 6, 8] - third # represents 'step value'.
