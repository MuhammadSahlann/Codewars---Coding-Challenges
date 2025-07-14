// Codewars - Coding Challenge 1

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  let result = 0;
 
  for (let i = 1; i < number; i++) {
    //if (i % 3 === 0) {
    //  result += i;
    //} else if (i % 5 === 0) {
    //  result += i;
    //}
    
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  
  return result;
}

console.log(solution(10)); // 3+5+6+9    => 23
console.log(solution(12)); // 3+5+6+9+10 => 33