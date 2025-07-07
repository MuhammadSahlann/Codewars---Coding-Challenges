// Codewars - Coding Challenge 3

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let vowel  = 'AIUEOaiueo';
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        result += 1;
      }
    }
  }
  
  return result;
}