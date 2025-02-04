function pythagoreanRule(a, b, c) {
  return Math.sqrt(a * a + b * b) === c;
}

const limit = 1000

function getSpecialPythagoreanTriplet() {
  for (let a = 1; a <= limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
      for (let c = b + 1; c <= limit; c++) {
        if (pythagoreanRule(a, b, c) && a + b + c === limit) {
          return { a, b, c };
        }
      }
    }
  }
}

function getProductABC() {
  return (
    getSpecialPythagoreanTriplet().a *
    getSpecialPythagoreanTriplet().b *
    getSpecialPythagoreanTriplet().c
  );
}

console.log(getSpecialPythagoreanTriplet());
// {a: 200, b: 375, c: 425}

console.log(getProductABC());
// 31875000