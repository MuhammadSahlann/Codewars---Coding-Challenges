// Codewars - Coding Challenge 23

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

//function findOutlier(integers) {
//  let even = [];
//  let odd  = [];
//  
//  for (let i = 0; i < integers.length; i++) {
//    if (integers[i] % 2 == 0) {
//      even.push(integers[i]);
//    } else {
//      odd.push(integers[i]);
//    }
//  }
//  
//  return (even.length > 1) ? odd[0] : even[0];
//}

function findOutlier(integers) {
  let evens = integers.filter(n => n % 2 === 0);
  let odds  = integers.filter(n => n % 2 !== 0);
  return (evens.length > 1) ? odds[0] : evens[0];
}

console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([4, 2, 8, 3, 10])); // 3