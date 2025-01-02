// the sum of the squares of the first 10 numbers is 385
// the square of the sum of the first 10 numbers is 3025
// the difference is 3025 - 385 = 2640

// find from 1 to 100

function sumOfTheSquares(start = 1, end = 100) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    let squared = i * i;
    sum += squared;
  }
  return sum;
}

function squareOfTheSum(start = 1, end = 100) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum * sum;
}

function theDifference() {
  return squareOfTheSum() - sumOfTheSquares();
}

function testDifference() {
  return squareOfTheSum(1, 10) - sumOfTheSquares(1, 10);
}

console.log(theDifference()); // 25164150
console.log(testDifference()); // 2640
