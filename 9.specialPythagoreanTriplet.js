function pythagoreanRule(a, b, c) {
  return Math.sqrt(a * a + b * b) === c;
}

function getSpecialPythagoreanTriplet() {
  for (let a = 1; a <= 200; a++) {
    for (let b = a + 1; b <= 400; b++) {
      for (let c = b + 1; c <= 450; c++) {
        if (pythagoreanRule(a, b, c) && a + b + c === 1000) {
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