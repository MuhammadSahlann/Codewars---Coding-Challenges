// Codewars - Coding Challenge 4

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// function disemvowel(str) {
//  return str.replace(/[aiueo]/gi, '');
// }

function disemvowel(str) {
  let result = '';
  
  for (let letter of str) {
    let lowerCaseLetter = letter.toLowerCase();
    
    if (lowerCaseLetter !== 'a' && 
        lowerCaseLetter !== 'i' && 
        lowerCaseLetter !== 'u' && 
        lowerCaseLetter !== 'e' && 
        lowerCaseLetter !== 'o'
    ) {
      result += letter;
    }
  }
  
  return result;
}