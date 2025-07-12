// Codewars - Coding Challenge 13

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let arrNumber  = numbers.split(' ');
  let highNumber = arrNumber[0];
  let lowNumber  = arrNumber[0];
  let number;
  
  for (let i = 1; i <= arrNumber.length; i++) {
    number = Number(arrNumber[i]);
 
    if (number < Number(lowNumber)) {
      lowNumber = number;
    }
    
    if (number > Number(highNumber)) {
      highNumber = number;
    }
  }
  
  return `${highNumber} ${lowNumber}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"