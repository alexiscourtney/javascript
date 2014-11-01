function reverseArray(array) {
  var reversedArray = [];
  while (array.length > 0) {
    reversedArray.unshift(array.shift());
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  var temp = 0;
  for (var i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i -1] = temp;
  }
}


console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
