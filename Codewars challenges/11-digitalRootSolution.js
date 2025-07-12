// Codewars - Coding Challenge 11

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

//function digitalRoot(n) {
//  let number = String(n).split('');
//  let result = 0;
//    
//  for (let i = 0; i < number.length; i++) {
//    result += Number(number[i]);
//  }
//    
//  return (n >= 10) ? digitalRoot(result) : n;
//}

//function digitalRoot(n) {
//  while (n >= 10) {
//    n = String(n).split('').reduce((acc, curr) => Number(acc) + Number(curr));
//  }
//  
//  return n;
//}

function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}

console.log(digitalRoot(456)); // 6
// 4+5+6 = 15 => 1+5 = 6
console.log(digitalRoot(16)); // 7
// 1+6 => 7