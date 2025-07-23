// HackerRank - Coding Challange 5

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// function birthdayCakeCandles(candles) {
//     let result = {};

//     for (let i = 0; i < candles.length; i++) {
//         let number = candles[i];
//         let count  = 0;

//         for (let j = 0; j < candles.length; j++) {
//             if (number === candles[j]) {
//                 count++;
//             }
//         }

//         if (count > 1 && result[number] === undefined) {
//             result[number] = count;
//         }   
//     }

//     return Number(Object.values(result));
// }

function birthdayCakeCandles(candles) {
    let result     = {};
    let duplicates = 0;

    for (const candle of candles) {
        let count      = result[candle] || 0;
        result[candle] = count + 1;

        if (count + 1 === 2) {
            duplicates++;
        }
    }

    return Math.max(...Object.values(result));
}

// function birthdayCakeCandles(candles) {
//     let charMap    = new Map();
//     let duplicates = 0;

//     for (let candle of candles) {
//         let count = charMap.get(candle) || 0;
//         charMap.set(candle, count + 1);

//         if (count + 1 === 2) {
//             duplicates++;
//         }
//     }

//     return Math.max(...charMap.values());
// }

console.log(birthdayCakeCandles([1, 4, 4, 3]));