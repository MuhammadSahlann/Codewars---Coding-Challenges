// HackerRank - Coding Challange 2

// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    const n = arr.length;
    let firstDiagonal  = 0;
    let secondDiagonal = 0;

   for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
           if (i === j ) {
               firstDiagonal += arr[i][i];
           }

           if (i + j === n - 1) {
               secondDiagonal += arr[i][j];
           }
       }
   }

   return Math.abs(firstDiagonal - secondDiagonal);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // 15