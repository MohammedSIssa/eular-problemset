const below20 = [
  0, 'one'.length, 'two'.length, 'three'.length, 'four'.length, 'five'.length, 'six'.length,
  'seven'.length, 'eigth'.length, 'nine'.length, 'ten'.length, 'eleven'.length, 'twelve'.length,
  'thirteen'.length, 'fourteen'.length, 'fifteen'.length, 'sixteen'.length, 'seventeen'.length,
  'eighteen'.length, 'nineteen'.length
]

const endingWithZero = {
  20: 'twenty'.length, 30: 'thirty'.length,
  40: 'forty'.length, 50: 'fifty'.length,
  60: 'sixty'.length, 70: 'seventy'.length,
  80: 'eighty'.length, 90: 'ninety'.length
}

const hunderds = {
  100: 'onehundred'.length, 200: 'twohundred'.length,
  300: 'threehundred'.length, 400: 'fourhundred'.length,
  500: 'fivehundred'.length, 600: 'sixhundred'.length,
  700: 'sevenhundred'.length, 800: 'eighthundred'.length,
  900: 'ninehundred'.length
}

function countLetters(number) {
  if(number < 20) {
    return below20[number]
  }
  else if (number >= 20 && number < 100) {
    if(number % 10 === 0) {
      return endingWithZero[number]
    }
    else {
      let nn = countLetters(Math.floor(number / 10) * 10)
      let n = countLetters(number % 10)

      return nn + n
    }
  }
  else if(number >= 100 && number < 1000) {
    if(number % 100 === 0) {
      return hunderds[number]
    }
    else {
      let nnn = countLetters(Math.floor(number / 100) * 100)
      
      let digitTwo = Math.floor(number / 10) % 10
      if(digitTwo === 1) {
        let nn = countLetters(digitTwo * 10 + number % 10)
        return nnn + nn + 3
      }

      let nn = countLetters(Math.floor(number / 10) % 10 * 10)
      let n = countLetters(number % 10)

      return nnn + nn + n + 3
    }
  }
  else if(number === 1000) {
    return "onethousand".length
  }
}

function solution(limit) {
  let total = 0
  for(let i = 1; i <= limit; i++){
    total += countLetters(i)
  }
  return total
}

const result = solution(1000)
console.log(result)
// 21124
