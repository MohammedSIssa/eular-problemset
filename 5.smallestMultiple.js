// 2520 is the smallest number that is divisble from 1 to 10 with no reminder
// find the smallest number from 1 to 20 with no reminder

function getSmallest(start, end) {
  let found = false
  let number = end - start
  while(!found) {
    for(let i = start; i <= end; i++){
      if (number % i === 0){
        found = true
      }
      else {
        number += 1
        found = false
        break
      }
    }
  }
  return number
}

// console.log(getSmallest(1, 20)) // 232792560
console.log(getSmallest(1, 10)) // 2520