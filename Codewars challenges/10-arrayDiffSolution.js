// Codewars - Coding Challenge 10

// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  if (a.length == [] || b.length == []) {
    return a;
  } else {
    for (let i = 0; i < b.length; i++) {
      while (a.includes(b[i])) {
        a.splice(a.indexOf(b[i]), 1);
      }
    }
    
    return a;
  }
}

console.log(arrayDiff([1,2,2], [2]));
// 1