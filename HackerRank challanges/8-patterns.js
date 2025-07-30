function leftStaircase(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        // symbol
        for (let j = 0; j <= i; j++) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

function rightStaircase(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        // space
        for (let space = n - 1; space > i; space--) {
            result += ' ';
        }

        // symbol
        for (let j = 0; j <= i; j++) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result; 
}

function flipedLeftStaircase(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        // symbol
        for (let j = n; j > i; j--) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

function flipedRightStaircase(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        //space
        for (let space = 0; space < i; space++) {
            result += ' ';
        }

        // symbol
        for (let j = n; j > i; j--) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

function triangle(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        //space
        for (let space = n - 1; space > i; space--) {
            result += ' ';
        }

        // symbol
        for (let j = 0; j < i * 2 + 1; j++) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

function triangle2(n, symbol) {
    let result = '';

    // newline
    for (let i = 1; i <= n; i++) {
        // space
        for (let space = 0; space < n - i; space++) {
            result += ' ';
        }

        // symbol
        for (let j = 0; j < i; j++) {
            if (j >= 1) {
                // kamu bisa ubah simbol ini dengan karakter lain ^_^
                result += symbol;
            }
            
            result += symbol;
        }

        result += '\n';
    }
    
    return result;
}

function flipedTriangle(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        // space
        for (let space = 0; space < i; space++) {
            result += ' ';
        }

        // symbol
        for (let j = 1; j < n * 2 - (i * 2); j++) {
            result += symbol;
        }

        result += '\n';
    }

    return result;
}

function verticalRightTriangle(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        // symbol
        for (let j = 0; j < i * 2 + 1; j++) {
            result += symbol;
        }

        result += '\n';
    }

    // newline
    for (let i = 0; i < n - 1; i++) {
        // symbol
        for (let j = 1; j < n * 2 - (i * 2 + 2); j++) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

function verticalLeftTriangle(n, symbol) {
    let result = '';

    // newline
    for (let i = 1; i <= n; i++) {
        // space
        for (let space = 1; space <= n * 2 - (i * 2); space++) {
            result += ' ';
        }

        // symbol
        for (let j = 0; j < i * 2 - 1; j++) {
            result += symbol;
        }

        result += '\n';
    }

    // newline
    for (let i = 1; i < n; i++) {
        // // space
        for (let space = 1; space <= i * 2; space++) {
            result += ' ';
        }

        // symbol
        for (let j = 1; j < n * 2 - (i * 2); j++) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

function diamond(n, symbol) {
    let result = '';

    // newline
    for (let i = 0; i < n; i++) {
        // space
        for (let space = n - 1; space > i; space--) {
            result += ' ';
        }

        // symbol
        for (let j = 0; j < i * 2 + 1; j++) {
            result += symbol;
        }

        result += '\n';
    }

    // newline
    for (let i = 0; i < n - 1; i++) {
        // space
        for (let space = 0; space <= i; space++) {
            result += ' ';
        }

        // symbol
        for (let j = 1; j < n * 2 - (i * 2 + 2); j++) {
            result += symbol;
        }
        
        result += '\n';
    }

    return result;
}

console.log(leftStaircase(5, '*'));
console.log(rightStaircase(5, '*'));
console.log(flipedLeftStaircase(5, '*'));
console.log(flipedRightStaircase(5, '*'));
console.log(triangle(5, '*'));
console.log(triangle2(5, '*'));
console.log(flipedTriangle(5, '*'));
console.log(verticalRightTriangle(5, '*'));
console.log(verticalLeftTriangle(5, '*'));
console.log(diamond(5, '*'));

// 4   *
// 3  ***
// 2 *****
// 1*******
// *********
// 1*******
// 2 *****
// 3  ***
// 4   *










