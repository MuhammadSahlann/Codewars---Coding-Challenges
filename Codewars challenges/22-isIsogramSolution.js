// Codewars - Coding Challenge 22

// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if(str[i].toLowerCase() == str[j].toLowerCase()) return false;
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('foo')); // false
console.log(isIsogram('moOse')); // false