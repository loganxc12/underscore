//In this file I will explore and practice using the underscore 
//function: indexBy. This function allows us to take a collection 
//of data and extract from it an index value and then produce a 
//new collection of data with index value as the key and the data 
//as the object associated with that key.

var stooges = [
    {name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'curly', age: 60}
];

var indexedStooges = _.indexBy(stooges, 'age');
// ==> {40: Object, 50: Object, 60: Object}

//Similar functions provided by underscore include: groupBy and 
//countBy