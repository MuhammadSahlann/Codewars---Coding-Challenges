// Codewars - Coding Challenge 7

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  // "If there is no name, then print 'no one likes this'. But if there is a name, check again whether there is more than one name. If there is more than one name, then print 'like this'; otherwise, print 'likes this.
  let suffix = (names.length === 0 ? 'no one likes this' : `like${(names.length > 1) ? '' : 's'} this`);
  
  // If there is only one name, then print the "name + likes this"; otherwise, print ""
  let result = (names.length === 1) ? names[0] + ' likes this' : '';
  
  for (let i = 0; i < names.length; i++) {
    // 2 names
    if (names.length === 2) {
      result += (i >= 1) ? '' : names[i];

      if (i === 1) {
        result += ` and ${names[i]} ` + suffix;
      }
    }
    // 3 names
    if (names.length === 3) {
      result += (i >= 2) ? '' : `${names[i]}${(i === 0) ? ', ' : ''}`;
      
      if (i >= 2) {
        result += ` and ${names[i]} ` + suffix;
      }
    }
    // 4 or more names
    if (names.length > 3) {
      result += (i === 1 || i > 1) ? '' : names[i];
        
      if (i === 1) {
        result += `, ${names[i]} and ${names.length - 2} others ` + suffix;
      }
    }
  }
 
  return (names.length === 0) ? suffix : result;
}

function likes(names) {
  let templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];

  let idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}


// likes([]), 'no one likes this';
// likes(['Peter']), 'Peter likes this';
// likes(['Jacob', 'Alex']), 'Jacob and Alex like this';
// likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this';
// likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this';