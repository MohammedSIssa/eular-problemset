function countDivisors(num) {
  let numberOfDivisors = 0
  for(let i = 1; i <= num; i++){
    if(num % i === 0){
      numberOfDivisors++
    }
  }
  return numberOfDivisors
}

function findTriangularNumber(minDivisors){
  let n = 1
  let triangularNumber
  while(true){
    triangularNumber = (n*(n+1))/2
    if(countDivisors(triangularNumber) > minDivisors){
      return triangularNumber
    }
    n++
  }
}

const result = findTriangularNumber(500)
console.log(result)
// 76576500