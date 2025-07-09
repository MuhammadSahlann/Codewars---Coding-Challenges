// Codewars - Coding Challenge 13

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLows(numbers) {
  let nums = numbers.split(' ');
  let high = nums[0];
  let low  = nums[0];
  
  for (let i = 1; i <= nums.length; i++) {
    if (Number(high) < Number(nums[i])) {
      high = nums[i];
    }
  }
  
  for (let i = 1; i <= nums.length; i++) {
    if (Number(low) > Number(nums[i])) {
      low = nums[i];
    }
  }
  
  return `${high} ${low}`;
}

function highAndLow(numbers) {
  let arrNumber  = numbers.split(' ');
  let highNumber = arrNumber[0];
  let lowNumber  = arrNumber[0];
  let number;
  
  for (let i = 1; i <= arrNumber.length; i++) {
    number = Number(arrNumber[i]);
    
    if (number < Number(lowNumber)) {
      lowNumber = number;
    }
    
    if (number > Number(highNumber)) {
      highNumber = number;
    }
  }
  
  return `${highNumber} ${lowNumber}`;
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"