// Codewars - Coding Challenge 23

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let even = [];
  let odd  = [];
  
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }
  
  return (even.length > 1) ? odd[0] : even[0];
}

console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([4, 2, 8, 3, 10])); // 3