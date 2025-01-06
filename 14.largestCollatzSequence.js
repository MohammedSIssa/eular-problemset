function nextInSequence(prevNumber) {
  if(prevNumber % 2 === 0){
    return prevNumber / 2
  }
  return (prevNumber * 3) + 1
}

function generateSequence(startingNumber) {
  let chainLength = 1
  let current = startingNumber
  while(current !== 1){
    chainLength += 1
    current = nextInSequence(current)
  }
  return { chainLength, startingNumber }
}

function largestCollatzSequence() {
  let allSequences = []
  for(let i = 2; i < 1000000; i++){
    allSequences.push(generateSequence(i))
  }
  return allSequences.sort((a, b) => b.chainLength - a.chainLength)[0]
}

let result = largestCollatzSequence()
console.log(result)
// { 
//  chainLength: 525, 
//  startingNumber: 837799 
// }