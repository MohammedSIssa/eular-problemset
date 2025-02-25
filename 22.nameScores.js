const fs = require('node:fs');

const letterValue = {
  'A': 1,'B': 2,'C': 3,'D': 4,'E': 5,'F': 6,'G': 7,'H': 8,'I': 9,'J': 10,'K': 11,'L': 12,'M': 13,'N': 14,'O': 15,'P': 16,'Q': 17,'R': 18,'S': 19,'T': 20,'U': 21,'V': 22,'W': 23,'X': 24,'Y': 25,'Z': 26
}

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(let i = 0; i < alpha.length; i++) {
  letterValue[alpha[i]] = i+1
}

console.log(letterValue)

fs.readFile('names.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let filteredData = data.split(",")
  filteredData = filteredData.map(item => item.replace('"', ''))
  filteredData = filteredData.map(item => item.replace('"', ''))
  filteredData = filteredData.sort()
  // console.log(filteredData)
  let result = 0
  for(let i = 0; i < filteredData.length; i++) {
    result += getNameTotal(filteredData[i])
  }
  console.log(result)

  function getNameTotal(name) {
    let totalForName = 0
    for(let i = 0; i < name.length; i++) {
      totalForName += letterValue[name[i]]
    }
    let idx = filteredData.indexOf(name) + 1
    return idx * totalForName
  }
});

// 871198282