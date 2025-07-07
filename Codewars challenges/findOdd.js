// Codewars - Coding Challenge 8

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  return A.find((item) => A.filter(el => el == item).length % 2)
}