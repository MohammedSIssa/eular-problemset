let hit = 0;

function getTotalSundaysAtFirstOfMonth(currentYear, currentSunday) {
  let isLeapYear = currentYear % 4 === 0;
  const months = [
    31, isLeapYear ? 29 : 28,
    31, 30, 31, 30, 31, 
    31, 30, 31, 30, 31
  ];
  for(let i = 0; i < months.length; i++) {
    while(currentSunday < months[i]) {
      currentSunday += 7
    }
    currentSunday -= months[i]

    if(currentSunday === 1) {
      hit++
    }
  }

  return {
    hit,
    sundayOnNewYear: currentSunday
  }
}

function solution() {
  let a = getTotalSundaysAtFirstOfMonth(1901, 6)
  let s = a.sundayOnNewYear
  let b
  for(let i = 1902; i <= 2000; i++) {
    b = getTotalSundaysAtFirstOfMonth(i , s)
    s = b.sundayOnNewYear
  }
  return b.hit
}
const result = solution()
console.log(result)
// 171