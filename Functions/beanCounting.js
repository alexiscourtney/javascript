function countBs(string, char) {
  var count = 0;
  for (N = 0; N <= string.length; N++) {
    if (string.charAt(N) == char) {
      count ++;
    }
  }
  return count;
}

console.log(countBs("kkkkklllsmp", "k"));
