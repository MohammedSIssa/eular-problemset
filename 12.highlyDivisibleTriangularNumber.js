function countDivisors(num) {
  let numberOfDivisors = 2
  for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      numberOfDivisors += 2
    }
  }
  return numberOfDivisors
}

function findTriangularNumber(minDivisors){
  let n = 1
  let triangularNumber
  while(true){
    triangularNumber = ( n * ( n + 1 ) ) / 2
    if(countDivisors(triangularNumber) > minDivisors){
      return triangularNumber
    }
    n++
  }
}

const result = findTriangularNumber(500)
console.log(result)
// 76576500