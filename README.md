### My Eular Problemset Solutions

[Project Eular's Link](https://projecteuler.net/archives)

[Problem 1: Multiples of 3 or 5](https://projecteuler.net/problem=1)
- Question:

![Question 1](./images/1.png)

- Solution:
``` JS
// get the sum of all numbers that are multiplies of 3 or 5 below 1000

function sum(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function getSumOfMultiplies() {
  let numbers = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numbers.push(i);
    }
  }
  return sum(numbers);
}

console.log(getSumOfMultiplies());
// 233168
```

[Problem 2: Even Fibonacci Numbers](https://projecteuler.net/problem=2)

- Question:

![Question 2](./images/2.png)

- Solution

``` JS
// get the sum of even numbers in the fibonacci sequence

const MAX_VALUE = 4000000;

function sum(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function fib() {
  let numbers = [];
  let a = 1;
  let b = 1;
  for (;;) {
    let c = a + b;

    if (c % 2 == 0) {
      numbers.push(c);
    }
    a = b;
    b = c;

    if (a >= MAX_VALUE) {
      break;
    }
  }
  return sum(numbers);
}
console.log(fib());
// 4613732
```

[Problem 3: Largest Prime Factor](https://projecteuler.net/problem=3)

- Question:

![Question 3](./images/3.png)

- Solution:

``` JS
// the prime factors of 13195 are 5, 7, 13, and 29

// what is the largest prime factor for 600851475143?

const TARGET = 60085147;
// rest 5143 removed for performance issues

const TEST = 13195;

function getLargetPrimeFactor() {
  return getMax(makePrimeFactorsList());
}

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

console.log(getLargetPrimeFactor());
// 1397329
```