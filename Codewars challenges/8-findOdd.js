// Codewars - Coding Challenge 8

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//function findOdd(A) {
//  for (let i = 0; i < A.length; i++) {
//    let count = 0;
//    
//    for (let j = 0; j < A.length; j++) {
//      if (A[i] == A[j]) {
//        count++
//      }
//    }
//    
//    if (count % 2 == 1) {
//      return A[i];
//    }
//  }
//}

//function findOdd(A) {
//  const count = {};
//  
//  for (let num of A) {
//    count[num] = (count[num] || 0) + 1;
//  }
//  
//  for (let num in count) {
//    if (count[num] % 2 === 1) {
//      return Number(num);
//    }
//  }
//}

//function findOdd(A) {
//  return A.find((item) => A.filter(el => el == item).length % 2)
//}

function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1