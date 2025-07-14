// Codewars - Coding Challenge 24

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

//function duplicateCount(text) {
//  let result = {};
//  text       = text.toLowerCase();
//
//  for (let i = 0; i < text.length; i++) {
//    let char  = text[i];
//    let count = 0;
//
//    for (let j = 0; j < text.length; j++) {
//      if (char === text[j]) {
//        count++;
//      }
//    }
//
//    if (count > 1 && result[char] === undefined) {
//      result[char] = count;
//    }
//  }
//
//  return Object.keys(result).length;
//}

//function duplicateCount(text) {
//  let charMap   = new Map();
//  let duplicates = 0;
//
//  text = text.toLowerCase();
//
//  for (let char of text) {
//    let count = charMap.get(char) || 0;
//    charMap.set(char, count + 1);
//    if (count + 1 === 2) {
//      duplicates++;
//    }
//  }
//
//  return duplicates;
//}

//function duplicateCount(text) {
//  let seenOnce  = new Set();
//  let seenTwice = new Set();
//
//  text = text.toLowerCase();
//
//  for (let char of text) {
//    if (seenOnce.has(char)) {
//      seenTwice.add(char);
//    } else {
//      seenOnce.add(char);
//    }
//  }
//
//  return seenTwice.size;
//}

//function duplicateCount(text) {
//  text = text.toLowerCase();
//  let counts = [...text].reduce((acc, char) => {
//    acc[char] = (acc[char] || 0) + 1;
//    return acc;
//  }, {});
//  
//  return Object.values(counts).filter(count => count > 1).length;
//}

//function duplicateCount(text) {
//  text = text.toLowerCase();
//  return [...new Set(text)].filter(char => text.indexOf(char) !== text.lastIndexOf(char)).length;
//}

const duplicateCount = text => new Set([...text.toLowerCase()].filter((c, i, arr) => arr.indexOf(c) !== i)).size;

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2