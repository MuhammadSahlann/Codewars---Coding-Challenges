// Codewars - Coding Challenge 20

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

//function getMiddle(s) {
//  let arrStr = s.split('');
//  let result = '';
//  
//  if (arrStr.length == 1) {
//    result += arrStr[0];
//  } else if (arrStr.length % 2 == 0) {
//    result += arrStr[(arrStr.length / 2) - 1];
//    result += arrStr[arrStr.length / 2];
//  } else {
//    result += arrStr[Math.floor(arrStr.length / 2)];
//  }
//  
//  return result;
//}

function getMiddle(s) {
  let length = s.length;
  let midStr = Math.floor(length / 2);
  
  return (length % 2 === 0) ? s[midStr - 1] + s[midStr] : s[midStr];
}

console.log(getMiddle('string')); // ri
console.log(getMiddle('evn')); // v
console.log(getMiddle('H')); // H