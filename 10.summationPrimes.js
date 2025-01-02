const MAX_PRIME = 2000000

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

function sum(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function makePrimesList(start = 2, end = MAX_PRIME) {
  let pList = []
  for(let i = start; i <= end; i++){
    if(checkPrime(i)) {
      pList.push(i)
    }
  }
  return pList
}

function sumOfPrimes() {
  return sum(makePrimesList())
}

console.log(sumOfPrimes())
// 142,913,828,922