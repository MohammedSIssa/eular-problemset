function factorial(n) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
  }
  return result;
}

function solution(number) {
  const strArr = [...(BigInt(factorial(number)) + '')]
  return strArr.reduce((curr, prev) => +curr + +prev, 0)
}

const result = solution(100)
console.log(result)
// 648