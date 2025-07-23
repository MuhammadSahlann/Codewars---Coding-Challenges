// HackerRank - Coding Challange 4

// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    let result = '';

    for (let i = 0; i < n; i++) {

        for (let space = n - 1; space > i; space--) {
            result += ' ';
        }

        for (let char = 0; char <= i; char++) {
            result += '#';
        }
        
        result += '\n';
    }

     console.log(result);
}

staircase(6);