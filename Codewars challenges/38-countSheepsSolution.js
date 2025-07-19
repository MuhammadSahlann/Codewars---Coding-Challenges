// Codewars - Coding Challenge 38

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
  let count = 0;
  
  for (let i = 0; i < sheep.length; i++) {
    count += (sheep[i] == true) ? 1 : 0;
  }
  
  return count;
}

console.log(countSheeps([true])); // 1
console.log(countSheeps([undefined,null,false,true])); // 1
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined])); // 2