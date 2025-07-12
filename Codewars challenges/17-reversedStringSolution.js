// Codewars - Coding Challenge 17

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str) {
  let result = '';
  let arrStr = str.split('');
  
  for (let i = arrStr.length; i > 0; i--) {
    result += arrStr[i - 1];
  }
  
  return result;
}

console.log(solution('world')); // 'dlrow'
console.log(solution('welcome')); // 'emoclew'
console.log(solution('hello')); // 'olleh'