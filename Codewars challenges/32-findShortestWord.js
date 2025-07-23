// Codewars - Coding Challenge 32

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let words = s.split(' ');
  let result = words[0].length;
  
  for (let i = 1; i < words.length; i++) {
    let word = words[i].length;
    
    if (word < result) {
      result = word;
    }
  }
  
  return result;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2