// Codewars - Coding Challenge 39

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10