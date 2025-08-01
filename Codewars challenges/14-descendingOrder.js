// Codewars - Coding Challenge 14

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

//function descendingOrder(numbers) {
//  let arrNumber = String(numbers).split('');
//  
//  for (let i = 0; i < arrNumber.length; i++) {
//    for (let j = 0; j < arrNumber.length - 1; j++) {
//      if (Number(arrNumber[j]) < Number(arrNumber[j + 1])) {
//        let tempNumber   = arrNumber[j];
//        arrNumber[j]     = arrNumber[j + 1];
//        arrNumber[j + 1] = tempNumber;
//      }
//    }
//  }
//  
//  return Number(arrNumber.join(''));
//}

//function descendingOrder(numbers) {
//  return Number(numbers.toString().split('').sort().reverse().join(''));
//}

function descendingOrder(numbers) {
  return Number(String(numbers).split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(123)); // 321
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321