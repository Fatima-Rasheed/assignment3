"use strict";
// Question no 1
function array1(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var myArray = [1, 2, 3, 4, 5];
console.log(array1(myArray, 1, 6));
//    Question no 2
var cart = [{ name: "bag", quantity: 2, price: 5000 }];
function additems(name1, quantity1, price1) {
    cart.splice(0, 0, { name: name1, quantity: quantity1, price: price1 });
    console.log(cart);
}
additems("lehnga", 1, 20000);
additems("shoes", 10, 90000);
