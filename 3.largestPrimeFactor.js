// the prime factors of 13195 are 5, 7, 13, and 29

// what is the largest prime factor for 600851475143?

const TARGET = 600851475143;

function getLargestPrimeFactor(number) {
  let i = 2
  while( i * i < number) {
    while(number % i === 0) {
      number /= i
    }
    i += 1
  }
  return number
}

console.log(getLargestPrimeFactor(TARGET))