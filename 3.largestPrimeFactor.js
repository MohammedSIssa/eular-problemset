// the prime factors of 13195 are 5, 7, 13, and 29

// what is the largest prime factor for 600851475143?

const TARGET = 60085147;
// rest 5143 removed for performance issues

const TEST = 13195;

function getLargetPrimeFactor() {
  return getMax(makePrimeFactorsList());
}

console.log(getLargetPrimeFactor());

function getMax(list) {
  if (list.length > 0) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > max) {
        max = list[i];
      }
    }
    return max;
  }
}

function makePrimeFactorsList() {
  return makeFactorsList().filter((num) => checkPrime(num));
}

function checkPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function makeFactorsList() {
  let factors = [];
  let target = TARGET
  for (let i = 2; i <= target; i++) {
    if (target % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}