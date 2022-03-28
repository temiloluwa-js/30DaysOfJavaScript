function shuffleArray(array) {
  for (i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i + 1);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleArray([1, 2, 3, 4, 7]));

function isPrime(number) {
  let isPrime = true;
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

console.log(isPrime(23));



