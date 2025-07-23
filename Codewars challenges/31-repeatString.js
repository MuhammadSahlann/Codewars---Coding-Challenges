// Codewars - Coding Challenge 31

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

//function repeatStr(n, s) {
//  let result = '';
//  
//  for (let i = 0; i < n; i++) {
//    result += s;
//  }
//  
//  return result;
//}

const repeatStr = (n, s) => s.repeat(n)

console.log(repeatStr(5, "Hello")); 