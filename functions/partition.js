//In this file I will explore and practice using the underscore 
//function: partition. This function allows us to 'partition' or
//divide a collection of data into two collections.

var numbers = [0,1,2,3,4,5,6,7,8,9];
var letters = ["a", "b", "c", "d", "e"];

var result = _.partition(numbers, (function(num) {
    return num > 4;
}))
// ==> [Array[5], Array[5]] - array with two elements inside. First 
//is an array of values 5-9, second is an array of values 0-4.

var letterResult = _.partition(letters, function(element, index, array) {
    return (['a','e','i','o','u']).indexOf(element) === -1;
})
// ==> [Array[3], Array[2]] - first array contains 'b', 'c', 'd' (the
//consonants), second contains 'a' and 'e' (the vowels).
