// Codewars - Coding Challenge 26

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//function squareSum(numbers) {
//  let result = 0;
//  
//  for (let i = 0; i < numbers.length; i++) {
//    result += numbers[i] * numbers[i];
//  }
//  
//  return result;
//}

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0