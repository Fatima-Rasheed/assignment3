"use strict";
// Question no 1
function array1(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
let value = 22;
let index = 2;
var myArray = [1, 2, 3, 4, 5];
console.log(array1(myArray, index, value));
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
// Question no 3
var i = 1;
while (i <= 25) {
    console.log("First 25 integers", i);
    i++;
}
// Question no 4
var i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log("First 10 even numbers=", i);
    }
    i++;
}
// Question no 5
function factorial(n) {
    var num = 1;
    while (n >= 1) {
        num *= n;
        n--;
    }
    return num;
}
let n = 2;
console.log("The facatorial is=", factorial(n));
// Question no 6
var num1 = [20, 54, -74, 83, -35, 76, -44];
while (i < num1.length) {
}
i++;
if (num1[i] < 0) {
    num1.splice(i, 1);
    console.log(num1);
}
// Question no 7
function sumArray(arraytosum) {
    var sum = 0;
    var j = 0;
    while (j < arraytosum.length) {
        sum += arraytosum[j];
        j++;
    }
    return sum;
}
var newArray = [39, 76, 22, 54];
console.log("sum of array is=", sumArray(newArray));
// Question no 8
function temperature(celcius) {
    let k = 0;
    let F = [];
    while (k < celcius.length) {
        F[k] = ((celcius[k] * 9 / 5) + 32);
        i++;
    }
    return F;
}
let celcius = [44, 76, 54, 33, 98];
console.log("Temperature is converted to F" + temperature(celcius));
