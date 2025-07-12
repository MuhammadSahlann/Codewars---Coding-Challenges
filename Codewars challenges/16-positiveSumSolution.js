// Codewars - Coding Challenge 16

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  
  return result;
}

console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, -2, 3, 4, 5])); // 12
console.log(positiveSum([1, -2, 3, -4, -5])); // 4