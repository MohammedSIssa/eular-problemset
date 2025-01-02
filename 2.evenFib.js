// get the sum of even numbers in the fibonacci sequence

const MAX_VALUE = 4000000;

function sum(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function fib() {
  let numbers = [];
  let a = 1;
  let b = 1;
  for (;;) {
    let c = a + b;

    if (c % 2 == 0) {
      numbers.push(c);
    }
    a = b;
    b = c;

    if (a >= MAX_VALUE) {
      break;
    }
  }
  return sum(numbers);
}
console.log(fib());
// 4613732
