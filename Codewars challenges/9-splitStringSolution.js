// Codewars - Coding Challenge 9

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
  let arr    = str.split('');
  let result = [];

  for (let i = 0; i < arr.length; i += 2){

    if (arr[i + 1]) {
      result.push(arr[i] + arr[i + 1]);
    } else {
      result.push(arr[i] + '_');
    }
  }

  return result;
}