// Codewars - Coding Challenge 43

// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

function snail(array) {
    let result = [];

    while (array.length) {
        result = result.concat(array.shift());

        for (let i = 0; i < array.length; i++) {
            if (array[i].length) result.push(array[i].pop());
        }

        if (array.length) result = result.concat(array.pop().reverse());
        
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length) result.push(array[i].shift());
        }
    }

    return result;
}

console.log(snail([
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5];