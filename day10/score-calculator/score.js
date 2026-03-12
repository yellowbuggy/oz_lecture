// 점수 입력
let input = prompt("Enter your sore.");
let score = Number(input);

// 점수 범위 설정
const MAXSCORE = 100;
const MINSCORE = 0;

// 유효성 검사
let isScore = true;
if (isNaN(score) || score < MINSCORE || score > MAXSCORE) {
  isScore = false;
}
// let isScore = (isNaN(score) || score < MINSCORE || score > MAXSCORE) ? false : true;

if (isScore) {
  // 최종 점수
  let finalScore = score + 5;
  console.log(`Final Score: ${finalScore}`);
  
  // 등급
  var grade = null;
  if (finalScore >= MAXSCORE) { // S: 95 <= score <= 100
    grade = "S";
  } 
  else if (finalScore >= 90) { // A: 85 <= score < 95
    grade = "A";
  }
  else if (finalScore >= 80) { // B: 75 <= score < 85
    grade = "B";
  }
  else if (finalScore >= 70) { // C: 65 <= score < 75
    grade = "C";
  }
  else if (finalScore >= 60) { // D: 55 <= score < 65
    grade = "D";
  }
  else {
    grade = "F"; // F: 0 <= score < 55
  }
  console.log(`Grade: ${grade}`);
  
  // 합불 여부
  var pf = null;
  if (grade === "F") {
    pf = "Fail";
  }
  else {
    pf = "Pass";
  }
  console.log(`Status: ${pf}`);
  
  // 등급별 메시지
  if (score === MAXSCORE) {
    grade = "Perfect";
  }
  let message = null;
  switch (grade) {
    case "Perfect":
      message = "Perfect Score!"
      break
    case "S":
      message = "Super!!";
      break
    case "A":
      message = "Excellent work!";
      break
    case "B":
      message = "Good job!";
      break
    case "C":
      message = "Satisfactory performance.";
      break
    case "D":
      message = "Needs improvement.";
      break
    case "F":
      message = "Please try harder!";
      break
  }
  console.log(`Message: ${message}`);
}
else {
  console.log("Invalid score! Please enter a number between 0 and 100.")
}