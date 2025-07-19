// Codewars - Coding Challenge 34

// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  let result = '';
  
  for (let i = 0; i < cc.length; i++) {
    result += (i < cc.length - 4) ? '#' : cc[i];
  }
  
  return result;
}

console.log(maskify('4556364607935616')); // '############5616'
console.log(maskify('1')); // '1'
console.log(maskify('11111')); // '#1111'