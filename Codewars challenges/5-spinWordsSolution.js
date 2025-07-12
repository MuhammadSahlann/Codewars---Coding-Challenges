// Codewars - Coding Challenge 5

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  let words  = string.split(' ');
  let result = [];
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      result.push(words[i].split('').reverse().join(''));
    } else {
      result.push(words[i]);
      }
  }
  
  return result.join(' ');
}

console.log(spinWords("Welcome")); // "emocleW"
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"