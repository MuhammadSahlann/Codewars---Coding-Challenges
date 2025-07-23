// Codewars - Coding Challenge 25

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char === 'x') countX++;
    if (char === 'o') countO++;
  }

  //return (countX === countO) ? true : false;
  return countX === countO;
}

console.log(XO('xo')); // true
console.log(XO('XO')); // true
console.log(XO('xxxoo')); // false
console.log(XO("xxOo")); // true
console.log(XO('')); // true