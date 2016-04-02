//In this file I will explore and practice using the underscore 
//functions: compact and flatten. 

//Create array of values for practice purposes.
var items = [2, "", true, false, 0, null, "some text", undefined, NaN];

//=*=*=COMPACT=*=*=

//Compact is used to remove all 'falsy' values from an array. As a 
//reminder, falsy values are: false, 0, "", null, undefined, NaN. So,
//after running _compact, the variable noFalsy will hold the values 
//2, true and "some text" with all others removed. 'Compacts' arrays
//down to only their truthy values.
var noFalsy = _.compact(items);

//=*=*=FLATTEN=*=*=

//Flatten 'flattens out' arrays of nested arrays and turns them into 
//singular, normal arrays.

//Create array of nested arrays for practice purposes.
var arrayInception = [["a", "b", "c"], [[1, 2, 3], [true, false]]];
//Calling _.flatten on the above array and assigning the result to the 
//vaiable flat will result in ["a", "b", "c", 1, 2, 3, true, false].
var flat = _.flatten(arrayInception);
//Passing in 'true' as a second arguement only flattens out arrays by 
//one level - 'shallow flatten' - ["a", "b", "c", Array[3], Array[2]].
var semiFlat = _.flatten(arrayInception, true);
