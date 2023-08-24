// Question no 1
function array1(array: any[], index: number, value: number) {
    array.splice(index, 0, value);
       return array;

  }
 var myArray: number[] = [1, 2, 3, 4, 5];
   console.log(array1(myArray, 1, 6));

//    Question no 2
var cart:string[]=["bags","shoes","glasses","jewllery"]
// AddItems
function addItems(){
    cart.splice(3,0,"Mangoes")
    return cart;
}
console.log()
console.log(addItems())
// REmoveItems
function removeItems(){
    cart.splice(2,1)
    return cart;
}
console.log(cart)
console.log(removeItems())
// Update items
function updateItems(){
    cart.splice(4,0,"perfumes")
    return cart;
}
console.log(cart)
console.log(updateItems())
// Question no 3
var i:number=1;
while (i<=25){
console.log(i)
i++;
}
// Question no 4
var i :number=1;
while(i<=20){
    if(i%2==0){
        console.log(i)
    }
    i++;
}
// Question no 5
function factorial(n:number){
var num:number=1;
while(n>0){
    num*=n;
    n-=1;
    console.log(num)
}
i++;
}
factorial(7)