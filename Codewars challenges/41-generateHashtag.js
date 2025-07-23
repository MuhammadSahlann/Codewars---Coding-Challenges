// Codewars - Coding Challenge 41

// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

//function generateHashtag(str) {
//  if (!str) return false;
//  
//  let result = '#';
//  let words  = str.trim().split(' ');
//  
//  for (let i = 0; i < words.length; i++) {
//    result += words[i].charAt(0).toUpperCase();
//    result += words[i].slice(1)
//  }
//  
//  return (result.length === 1 || result.length > 140) ? false : result;
//}

//function generateHashtag(str) {
//  if (!str || str.trim() === '') return false;
//  
//  let words = str.trim().split(' ').filter(word => word.length > 0);
//  let result = '#' + words.map(word =>
//    word.charAt(0).toUpperCase() + word.slice(1)
//  ).join('');
//  
//  return (result.length > 140) ? false : result;
//}

const generateHashtag = str => {
  if (!str || str.trim() === '') return false;

  const result = '#' + str
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  return result.length > 140 ? false : result;
};

console.log(generateHashtag("")); // false
console.log(generateHashtag(" ".repeat(200))); // false
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars")); // "#Codewars"
console.log(generateHashtag("Codewars Is Nice")); // "#CodewarsIsNice"
console.log(generateHashtag("Codewars is nice")); // "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); // false
console.log(generateHashtag("a".repeat(139))); // "#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
console.log(generateHashtag("a".repeat(140))); // false