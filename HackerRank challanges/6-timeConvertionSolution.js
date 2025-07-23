// HackerRank - Coding Challange 6

// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    const format = s.slice(-2);
    let time  = s.slice(0, -2);
    let parts = time.split(':');
    let hour  = parseInt(parts[0]);

    // hour = (format === 'PM') ? hour + 12 : Math.abs(hour - 12); 
    hour = (format === 'PM') ? hour + 12 : Math.abs(hour - 12); 

    return `${String((hour < 10) ? '0'+hour : hour)}:${parts[1]}:${parts[2]}`;
}

console.log(timeConversion('06:40:03AM'));
console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('04:59:59AM'));