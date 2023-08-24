"use strict";
// Question no 1
function array1(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var myArray = [1, 2, 3, 4, 5];
console.log(array1(myArray, 1, 6));
//    Question no 2
var cart = ["bags", "shoes", "glasses", "jewllery"];
// AddItems
function addItems() {
    cart.splice(3, 0, "Mangoes");
    return cart;
}
console.log();
console.log(addItems());
// REmoveItems
function removeItems() {
    cart.splice(2, 1);
    return cart;
}
console.log(cart);
console.log(removeItems());
// Update items
function updateItems() {
    cart.splice(4, 0, "perfumes");
    return cart;
}
console.log(cart);
console.log(updateItems());
