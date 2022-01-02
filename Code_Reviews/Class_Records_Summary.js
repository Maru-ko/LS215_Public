function generateClassRecords(scoresObj) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;
  const TERM_EXAM_AMOUNT = 4;
  let students = Object.keys(scoresObj);
  let result = { studentGrades: [], exams: [] };

  students.forEach(student => {
    let currentStudent = scoresObj[student];
    let exams = currentStudent.scores.exams.reduce((acc, exam, idx) => {
      result.exams[idx] ? result.exams[idx].push(exam) : result.exams[idx] = [exam]; // generates an array of exams separated by respective index for later processing
      return acc + exam;
    }, 0) / TERM_EXAM_AMOUNT; 
    let exercises = currentStudent.scores.exercises.reduce((acc, exe) => acc + exe, 0);
    let average = Math.round(exams * EXAM_WEIGHT + exercises * EXERCISE_WEIGHT);
    let grade = letterGrade(average);

    result.studentGrades.push(`${average} (${grade})`);
  });
  
  result.exams.forEach((exam,idx) => result.exams[idx] = avgMinMax(exam));

  return result;
}

function letterGrade(score) {
  if (score >= 93) return 'A';
  if (score >= 85) return 'B';
  if (score >= 77) return 'C';
  if (score >= 69) return 'D';
  if (score >= 60) return 'E';
  return 'F';
}

function avgMinMax(arr) {
  let avg = arr.reduce((acc, num) => acc + num, 0) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return {average: avg, minimum: min, maximum: max };
}
// 
let studentScores = {
  student1: { id: 123456789, scores: { exams: [90, 95, 100, 80], exercises: [20, 15, 10, 19, 15], }, },
  student2: { id: 123456799, scores: { exams: [50, 70, 90, 100], exercises: [0, 15, 20, 15, 15], }, },
  student3: { id: 123457789, scores: { exams: [88, 87, 88, 89], exercises: [10, 20, 10, 19, 18], }, },
  student4: { id: 112233445, scores: { exams: [100, 100, 100, 100], exercises: [10, 15, 10, 10, 15], }, },
  student5: { id: 112233446, scores: { exams: [50, 80, 60, 90], exercises: [10, 0, 10, 10, 0], }, },
};

console.log(generateClassRecords(studentScores));