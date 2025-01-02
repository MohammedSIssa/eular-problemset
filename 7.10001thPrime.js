const LIMIT = 10001

function isPrime(n) {
  if(n <= 1){
    return false
  } else {
    for(let i = 2; i * i <= n; i++){
      if(n % i === 0){
        return false
      }
    }
    return true
  }
}

function makePrimesList() {
  let primesList = []
  let currentNum = 0
  while (LIMIT >= primesList.length) {
    if(isPrime(currentNum)) {
      primesList.push(currentNum)
    }
    currentNum += 1
  }
  return primesList
}

function get_nthPrime(list, nthPlace) {
  return list[nthPlace - 1]
}

console.log(get_nthPrime(makePrimesList(), LIMIT))
// 104743