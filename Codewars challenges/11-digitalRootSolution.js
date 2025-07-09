// Codewars - Coding Challenge 11

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
  while (n >= 10) {
    n = String(n).split('').reduce((acc, curr) => Number(acc) + Number(curr));
  }
  
  return n;
}

console.log(digitalRoot(456)); // 6
// 4+5+6 = 15 => 1+5 = 6