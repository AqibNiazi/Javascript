//Program to generate pyramid
const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

//Program to calculate average number of students scores//

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//Write a function to give students grades based on their scores.
// Score Range	Grade
// 100	        "A++"
// 90 - 99	     "A"
// 80 - 89	     "B"
// 70 - 79	     "C"
// 60 - 69	     "D"
// 0 - 59	      "F"

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
//Write a simple function to check whether a student pass or fail.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

//Write a function to message the student about their results.

function studentMsg(totalScores, studentScore) {
  let message;
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const isPass = hasPassingGrade(studentScore);
  if (isPass) {
    message = `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    message = `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
  return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
