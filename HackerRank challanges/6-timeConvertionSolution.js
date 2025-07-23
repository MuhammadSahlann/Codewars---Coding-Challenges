// HackerRank - Coding Challange 6

// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    const format = s.slice(-2);
    let time  = s.slice(0, -2);
    let parts = time.split(':');
    let hour  = parseInt(parts[0]);

    if (format === 'AM') {
        if (hour === 12) hour = 0;
    } else {
        if (hour != 12) hour += 12;
    }

    return `${(hour < 10) ? '0'+hour : hour}:${parts[1]}:${parts[2]}`;
}

console.log(timeConversion('06:40:03AM'));
console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('04:59:59AM'));