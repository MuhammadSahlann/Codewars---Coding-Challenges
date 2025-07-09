// Codewars - Coding Challenge 12

// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join('');
  const middle   = numbers.slice(3, 6).join('');
  const last     = numbers.slice(6, 10).join('');
  
  return `(${areaCode}) ${middle}-${last}`;
}

// function createPhoneNumber(numbers) {
//  let format = "(xxx) xxx-xxxx";
//  
//  for (let i = 0; i < numbers.length; i++) {
//    format = format.replace('x', numbers[i]);
//  }
//  
//  return format;
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // (123) 456-7890