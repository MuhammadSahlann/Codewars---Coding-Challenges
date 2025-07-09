// Codewars - Coding Challenge 14

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(numbers) {
  return Number(numbers.toString().split('').sort().reverse().join(''))
}

function descendingOrder(numbers) {
  let arrNumber = String(numbers).split('');
  
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrNumber.length - 1; j++) {
      if (Number(arrNumber[j]) < Number(arrNumber[j + 1])) {
        // Tukar posisi jika elemen sekarang lebih kecil dari berikutnya
        let tempNumber   = Number(arrNumber[j]);
        arrNumber[j]     = Number(arrNumber[j + 1]);
        arrNumber[j + 1] = tempNumber;
      }
    }
  }
  return Number(arrNumber.join(''));
}

console.log(descendingOrder(123)) // 321