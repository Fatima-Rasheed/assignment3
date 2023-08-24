function array1(array: any[], index: number, value: number) {
    array.splice(index, 0, value);
    return array;
  }

  var myArray: number[] = [1, 2, 3, 4, 5];
  console.log(array1(myArray, 1, 6));