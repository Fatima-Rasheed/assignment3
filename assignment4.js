"use strict";
// Question no 1
function array1(array, index, value) {
    array.splice(index, 0, value);
    //    return array;
    console.log(array);
}
var myArray = [1, 2, 3, 4, 5];
console.log(array1(myArray, 1, 6));
