// Codewars - Coding Challenge 29

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

//function toJadenCase(str) {
//  let arrStr = str.split(' ');
//  let result = '';
//  
//  for (let i = 0; i < arrStr.length; i++) {
//    let word = arrStr[i];
//    
//    if (word.length > 0) {
//      result += word[0].toUpperCase();
//      result += word.slice(1);
//    }
//
//    result += ' ';
//  }
//  
//  return result.trimEnd();
//}

function toJadenCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(toJadenCase("most trees are blue")); // "Most Trees Are Blue"
console.log(toJadenCase("How can mirrors be real if our eyes aren't real")); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
console.log(toJadenCase("If everybody in the world dropped out of school we would have a much more intelligent society."));