// HackerRank - Coding Challange 3

// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    const n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero     = 0;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive += 1;
        } else if (arr[i] < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    }
    
    console.log(positive / n);
    console.log(negative / n);
    console.log(zero / n);
}

plusMinus([-4, 3, -9, 0, 4, 1]);