// Codewars - Coding Challenge 35

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

//function summation(num) {
//  let result = 0;
//  
//  for (let i = 1; i <= num; i++) {
//    result += i;
//  }
//  
//  return result;
//}

const summation = n => n * (n + 1) / 2;

console.log(summation(1)); // 1
console.log(summation(2)); // 3
console.log(summation(8)); // 36