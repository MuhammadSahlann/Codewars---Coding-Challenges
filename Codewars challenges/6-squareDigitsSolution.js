// Codewars - Coding Challenge 6

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  let result = '';
  let number = num.toString();
  
  for (let i = 0; i < number.length; i++) {
    result += number[i] * number[i];
  }
  
  return parseInt(result);
}

console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0