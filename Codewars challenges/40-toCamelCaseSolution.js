// Codewars - Coding Challenge 40

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

//function toCamelCase(str) {
//  if (!str) return str;
//  
//  let words     = str.split(/[-_]/);
//  let firstChar = str[0];
//
//  for (let i = 0; i < words.length; i++) {
//    if (i === 0 && firstChar === firstChar.toLowerCase()) {
//      words[i] = words[i].toLowerCase();
//    } else {
//      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//    }
//  }
//
//  return words.join('');
//}

const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

console.log(toCamelCase("the_stealth_warrior")); // 'theStealthWarrior'
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"