// Codewars - Coding Challenge 7

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

//function likes(names) {
//  let suffix = (names.length === 0 ? 'no one likes this' : `like${(names.length > 1) ? '' : 's'} this`);
//  let result = (names.length === 1) ? names[0] + ' likes this' : '';
//  
//  for (let i = 0; i < names.length; i++) {
//    if (names.length === 2) {
//      result += (i >= 1) ? '' : names[i];
//
//      if (i === 1) {
//        result += ` and ${names[i]} ` + suffix;
//      }
//    }
//    
//    if (names.length === 3) {
//      result += (i >= 2) ? '' : `${names[i]}${(i === 0) ? ', ' : ''}`;
//      
//      if (i >= 2) {
//        result += ` and ${names[i]} ` + suffix;
//      }
//    }
//    
//    if (names.length > 3) {
//      result += (i === 1 || i > 1) ? '' : names[i];
//        
//      if (i === 1) {
//        result += `, ${names[i]} and ${names.length - 2} others ` + suffix;
//      }
//    }
//  }
// 
//  return (names.length === 0) ? suffix : result;
//}

//function likes(names) {
//  const count = names.length;
//
//  switch (count) {
//    case 0:
//      return "no one likes this";
//    case 1:
//      return `${names[0]} likes this`;
//    case 2:
//      return `${names[0]} and ${names[1]} like this`;
//    case 3:
//      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//    default:
//      return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
//  }
//}

function likes(names) {
  let templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];

  let id = Math.min(names.length, 4);

  return templates[id].replace(/{name}|{n}/g, function(val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}


console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'