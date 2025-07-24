// Codewars - Coding Challenge 44

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

//function zero(op) { return op ? op(0) : 0; }
//function one(op) { return op ? op(1) : 1; }
//function two(op) { return op ? op(2) : 2; }
//function three(op) { return op ? op(3) : 3; }
//function four(op) { return op ? op(4) : 4; }
//function five(op) { return op ? op(5) : 5; }
//function six(op) { return op ? op(6) : 6; }
//function seven(op) { return op ? op(7) : 7; }
//function eight(op) { return op ? op(8) : 8; }
//function nine(op) { return op ? op(9) : 9; }

//function plus(x) { return function(y) {
//    return x + y;
//}}

//function minus(x) { return function(y) {
//    return x - y;
//}}

//function times(x) { return function(y) {
//    return x * y;
//}}

//function dividedBy(x) { return function(y) {
//    return Math.floor(y / x);
//}}

const zero  = op => op ? op(0) : 0;
const one   = op => op ? op(1) : 1;
const two   = op => op ? op(2) : 2;
const three = op => op ? op(3) : 3;
const four  = op => op ? op(4) : 4;
const five  = op => op ? op(5) : 5;
const six   = op => op ? op(6) : 6;
const seven = op => op ? op(7) : 7;
const eight = op => op ? op(8) : 8;
const nine  = op => op ? op(9) : 9;

const plus      = x => y => x + y;
const minus     = x => y => y - x;
const times     = x => y => x * y;
const dividedBy = x => y => Math.floor(y / x);

console.log(seven(times(five())));
console.log(six(dividedBy(two())));