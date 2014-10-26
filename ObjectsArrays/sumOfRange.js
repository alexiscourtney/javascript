function range(start, end, step) {
  var rangeArray = [];
  rangeArray.push(start);
  if (start < end) {
    step = step || 1;
    for (count = 1; start < end; count++) {
      start += step;
      rangeArray[count] = start;
    }
  } else if (start > end) {
    step = step || -1;
    for (count = 1; start > end; count++) {
      start += step;
      rangeArray[count] = start;
    }
  } return rangeArray;
}

function sum(rangeArray) {
  var sum = 0;
  for (count = 0; count < rangeArray.length; count++) {
    sum += rangeArray[count];
  }
  return sum;
}

console.log(range(4, 16));

console.log(range(5, -12, -1));

console.log(sum(range(1, 10)));
