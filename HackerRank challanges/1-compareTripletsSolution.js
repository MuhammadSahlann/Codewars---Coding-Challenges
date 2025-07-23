// HackerRank - Coding Challange 1

// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    let alice = 0;
    let bob   = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice += 1;
        } else if (a[i] < b[i]) {
            bob += 1;
        }
    }

    return [alice, bob];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [1, 1]