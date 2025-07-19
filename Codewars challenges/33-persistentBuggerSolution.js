// Codewars - Coding Challenge 33

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

//function persistence(num) {
//  let numbers = String(num);
//  let count   = 0;
//  
//  while (numbers.length > 1) {
//    let temp = 1;
//    
//    for (let i = 0; i < numbers.length; i++) {
//      temp *= Number(numbers[i]);
//    }
//    
//    numbers = String(temp);
//    count++;
//  }
//  
//  return count;
//}

//function persistence(num) {
//  let count = 0;
//  
//  while (num >= 10) {
//    let numbers = String(num);
//    let temp    = 1;
//    
//    for (let i = 0; i < numbers.length; i++) {
//      temp *= numbers[i]
//    }
//    
//    num = temp;
//    count++
//  }
//  
//  return count;
//}

function persistence(num) {
  let count = 0;

  while (num >= 10) {
    num = String(num)
      .split('')
      .reduce((acc, digit) => acc * Number(digit), 1);
    count++;
  }

  return count;
}

console.log(persistence(999));

//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
//999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
//4 --> 0 (because 4 is already a one-digit number, there is no multiplication)