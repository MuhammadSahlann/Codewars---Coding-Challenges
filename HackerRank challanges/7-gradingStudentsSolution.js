// HackerRank - Coding Challange 6

// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        let grade = Math.ceil(grades[i] / 5) * 5;

        if (grade >= 40) {
            if (grade - grades[i] < 3) grades[i] += grade - grades[i];
        }
    }

    return grades
}

console.log(gradingStudents([ 73, 67, 38, 33 ]));
console.log(gradingStudents([ 2, 37, 38 ]));