// find the largest palindrome of two 3-digit numbers multiplied

// 9009 is the largest of 91 x 99

function checkPalindrome(num) {
  return (num + "").split("").reverse().join("") === num + "";
}

function getMax(list) {
  if (list.length > 0) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > max) {
        max = list[i];
      }
    }
    return max;
  }
}

function makePalindromesList() {
  let pList = [];
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      let multiplied = i * j;
      if (checkPalindrome(multiplied)) {
        pList.push(multiplied);
      }
    }
  }
  return pList;
}

function getLargestPalindrome() {
  return getMax(makePalindromesList());
}

console.log(getLargestPalindrome());
// 906609