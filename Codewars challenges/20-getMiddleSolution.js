// Codewars - Coding Challenge 20

// get the middle character

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  let arr    = String(s).split('');
  let result = '';
  
  if (arr.length == 1) {
    result += arr[0]
  } else if (arr.length % 2 == 0) {
    result += arr[(arr.length / 2) - 1];
    result += arr[arr.length / 2];
  } else {
    result += arr[Math.floor(arr.length / 2)];
  }
  
  return result;
}

console.log(getMiddle('string')); // ri
console.log(getMiddle('even')); // ve
console.log(getMiddle('H')); // H