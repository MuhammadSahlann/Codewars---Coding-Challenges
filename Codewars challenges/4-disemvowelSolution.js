// Codewars - Coding Challenge 4

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

//function disemvowel(str) {
//  let result = '';
//  
//  //for (let i = 0; i < str.length; i++) {
//  //  let letter = str.toLowerCase();
//  //  
//  //  if (letter[i] !== 'a' &&
//  //    letter[i] !== 'i' &&
//  //    letter[i] !== 'u' &&
//  //    letter[i] !== 'e' &&
//  //    letter[i] !== 'o'
//  //  ) {
//  //    result += str[i];
//  //  }
//  //}
//  
//  for (let letter of str) {
//    let lowerCaseLetter = letter.toLowerCase();
//    
//    if (lowerCaseLetter !== 'a' &&
//      lowerCaseLetter !== 'i' &&
//      lowerCaseLetter !== 'u' &&
//      lowerCaseLetter !== 'e' &&
//      lowerCaseLetter !== 'o'
//    ) {
//      result += letter;
//    }
//  }
//  
//  return result;
//}

function disemvowel(str) {
  return str.replace(/[aiueo]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"