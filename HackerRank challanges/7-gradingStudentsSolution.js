// HackerRank - Coding Challange 6

// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if ((Math.floor(grades[i] / 5) * 5 + 5) >= 40) {
            if ((Math.floor(grades[i] / 5) * 5 + 5) - grades[i] < 3) {
                grades[i] += Math.floor(grades[i] / 5) * 5 + 5 - grades[i];
            }
        }
    }

    return grades
}

console.log(gradingStudents([ 73, 67, 38, 33 ]));
console.log(gradingStudents([ 2, 37, 38 ]));