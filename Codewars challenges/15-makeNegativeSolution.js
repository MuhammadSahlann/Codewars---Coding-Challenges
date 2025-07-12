// Codewars - Coding Challenge 15

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return (num > 0) ? num - (num * 2) : num;
}

console.log(makeNegative(42)); // -42
console.log(makeNegative(2)); // -2
console.log(makeNegative(-9)); // -9
console.log(makeNegative(13)); // -13