const gridSize = 20
const pathMoves = gridSize * 2

function factorial(n) {
  if (n == 1){
    return 1
  }else {
    return n * factorial(n - 1)
  }
}

const mathFormula = (factorial(pathMoves) / (factorial(gridSize) * factorial(gridSize)))
console.log(mathFormula)
// 137846528820