// Codewars - Coding Challenge 21

// mumbling
// ex
// accum('code') // C-Oo-Ddd-Eeee
// accum('html') // H-Tt-Mmm-Llll

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      result += (j == 0) ? s[i].toUpperCase() : s[i].toLowerCase();
    }
    result += (i === s.length - 1) ? '' : '-';
  }
  
  return result;
}

console.log(accum('code')); // C-Oo-Ddd-Eeee