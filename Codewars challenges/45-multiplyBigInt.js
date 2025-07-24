// Codewars - Coding Challenge 45

// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

function multiply(a, b) {
    if (a === '0' || b === '0') return '0';
    
    let result = Array(a.length + b.length).fill(0);
    
    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {
            let res = (a[i] - '0') * (b[j] - '0');
            let p1  = i + j;
            let p2  = i + j + 1;
            let sum = res + result[p2];
            
            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }
    
    while (result[0] === 0) {
        result.shift();
    }
    
    return result.join('')
}

console.log(multiply("0000001", "3")); // "5619135910"
console.log(multiply("1020303004875647366210", "2774537626200857473632627613")); // "2830869077153280552556547081187254342445169156730"
console.log(multiply("58608473622772837728372827", "7586374672263726736374")); // "444625839871840560024489175424316205566214109298"
console.log(multiply("9007199254740991", "9007199254740991")); // "81129638414606663681390495662081"