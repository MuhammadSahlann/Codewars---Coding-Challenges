// Codewars - Coding Challenge 42

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

//function humanReadable(seconds) {
//  let hh  = Math.floor(seconds / 3600);
//  seconds = seconds - hh * 3600;
//  let mm  = Math.floor(seconds / 60);
//  let ss  = seconds - mm * 60;
//  
//  return `${(hh < 10) ? '0'+hh : hh}:${(mm < 10) ? '0'+mm : mm}:${(ss < 10) ? '0'+ss : ss}`;
//}

function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  seconds %= 3600;
  let mm = Math.floor(seconds / 60);
  let ss = seconds % 60;

  return [hh, mm, ss].map(unit => String(unit).padStart(2, '0')).join(':');
}

console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(59)); // '00:00:59'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(90)); // '00:01:30'
console.log(humanReadable(3599)); // '00:59:59'
console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(86400)); // '24:00:00'
console.log(humanReadable(359999)); // '99:59:59'