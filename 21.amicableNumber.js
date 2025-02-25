function d(n) {
  let numbers = []
  for(let i = 1; i < n; i++) {
    if(n % i === 0) {
      numbers.push(i)
    }
  }
  return numbers.reduce((curr, prev) => curr + prev, 0)
}

// console.log(d(220), d(284))

let a = 220
let b = 284

if(d(a) === b && d(b) === a) {
  console.log(a, b, 'amicable')
}

const LIMIT = 10000

function solution() {
  let amicableNumbers = []
  let under1000sum = 504
  let under2000sum = under1000sum + 2394
  let under3000sum = under2000sum + 5544
  let under4000sum = under3000sum + 0
  let under5000sum = under4000sum + 0
  let under6000sum = under5000sum + 10584
  let under7000sum = under6000sum + 12600
  let under8000sum = under7000sum + 0
  let under9000sum = under8000sum + 0
  let under10000sum= under9000sum + 0

  // for(let a = LIMIT - 1000; a < LIMIT - 1; a++) {
  //   for(let b = a + 1; b < LIMIT; b++) {
  //     if(d(a) === b && d(b) === a) {
  //       amicableNumbers.push(a)
  //       amicableNumbers.push(b)
  //     }
  //   }
  // }
  return under10000sum
  // return {amicableNumbers, sum: amicableNumbers.reduce((curr, prev) => curr + prev, 0)}
}

console.log(solution())

// 31626