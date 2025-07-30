// Codewars - Coding Challenge 46

//https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
    let result = '';
    let carry = 0;

    // Buat panjang string sama dengan menambahkan nol di depan
    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;

    // Tambahkan dari belakang (seperti cara kita menjumlah secara manual)
    for (let i = a.length - 1; i >= 0; i--) {
        let digitSum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(digitSum / 10);
        result = (digitSum % 10) + result;
    }

    // Jika ada sisa carry
    if (carry > 0) result = carry + result;

    return result;
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // "91002328220491911630239667963"