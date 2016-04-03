//In this file I will explore and practice using the underscore 
//functions: where and findWhere. These functions allow us to 
//filter and find particular elements that meet some filter 
//criteria in a collection. 

//=*=*=WHERE=*=*=

var cars = [
    { make: "Ford", model: "F150", color: "black"},
    { make: "Ford", model: "F150", color: "blue"},
    { make: "Lexus", model: "IS 350", color: "red"},
    { make: "Kia", model: "Sorento", color: "black"}
]

var result = _.where(cars, { make: "Ford" });
// ==> [Object, Object] - both Fords, can also add multiple 
//properties as filter criteria, like this...
var result2 = _.where(cars, { make: "Ford", color: "black" });
// ==> [Object] - black Ford

//=*=*=FIND WHERE=*=*=

//_.findWhere is similar to the _.where function, it applies the
//same kind of conditions/filter criteria but only returns the 
//FIRST result that it finds. Returns single result.

var result3 = _.findWhere(cars, {make: "Ford"});
// ==> Object {make: "Ford", model: "F150", color: "black"}