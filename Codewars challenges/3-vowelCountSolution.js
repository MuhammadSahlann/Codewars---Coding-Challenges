// Codewars - Coding Challenge 3

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let vowel  = 'aiueo';
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i].toLowerCase() === vowel[j]) {
        result += 1;
      }
    }
  }
  
  return result;
}

console.log(getCount('sim salabim')); // 4
console.log(getCount("abracadabra")) // 5