// Codewars - Coding Challenge 21

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

//function accum(s) {
//  let result = '';
//  
//  for (let i = 0; i < s.length; i++) {
//    for (let j = 0; j < i + 1; j++) {
//      result += (j == 0) ? s[i].toUpperCase() : s[i].toLowerCase();
//    }
//    result += (i === s.length - 1) ? '' : '-';
//  }
//  
//  return result;
//}

function accum(s) {
  return s
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}

console.log(accum('code')); // C-Oo-Ddd-Eeee
console.log(accum('html')); // H-Tt-Mmm-Llll