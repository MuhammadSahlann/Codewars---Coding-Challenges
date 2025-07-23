// Codewars - Coding Challenge 27

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

//function removeChar(str) {
//  let result = '';
//  
//  if (str.length >= 3) {
//    for (let i = 1; i < str.length; i++) {
//      if (i !== str.length - 1) {
//        result += str[i];
//      }
//    }
//  }
//  
//  return result;
//}

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar('person')); // 'erso'
console.log(removeChar('place')); // 'lac'
console.log(removeChar('ooopsss')); // 'oopss'
console.log(removeChar('ab')); // ''
console.log(removeChar('xyz')); // 'y'