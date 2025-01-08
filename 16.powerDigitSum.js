let number = BigInt(2) ** BigInt(1000)

function getSum(str) {
  return [...str].reduce((curr, prev) => +curr + +prev)
}

console.log(getSum(number.toString()))