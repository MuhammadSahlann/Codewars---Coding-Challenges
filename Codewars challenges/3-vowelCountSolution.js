// Codewars - Coding Challenge 3

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

//function getCount(str) {
//  let vowels = 'aiueo';
//  let result = 0;
//  
//  for (let i = 0; i < str.length; i++) {
//    //for (let j = 0; j < vowels.length; j++) {
//    //  if (str[i].toLowerCase() === vowels[j]) {
//    //    result += 1;
//    //  }
//    //}
//    
///    if (vowel.includes(str[i].toLowerCase())) {
//      result++;
//    }
//  }
//  
//  return result;
//}

function getCount(str) {
  return str.split('').filter(char => 'aiueo'.includes(char.toLowerCase())).length;
}

console.log(getCount('sim salabim')); // 4
console.log(getCount("abracadabra")) // 5