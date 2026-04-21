//subtask 2.1

let colors = ["red", "blue", "green", "yellow"];
let scores = [85, 92, 78, 64, 90];
let random = [true, "hello", 42, null, "world"];

console.log("--- subtask 2.1 ---")
console.log("Colors:", colors);
console.log("Scores:", scores);
console.log("Random Data:", random);

//subtask 2.2
colors.push("orange");
colors.pop();
colors.shift();
colors.unshift("strawberry");

console.log("--- subtask 2.2 ---")
console.log("Number of scores:", scores.length);
console.log("Updated Colors:", colors);

//subtask 3.1
let student = {
  name: "Jiji",
  age: 19,
  course: "Information Technology"
};

console.log("--- subtask 3.1 ---")
console.log("Student Object:", student);

//subtask 3.2
console.log("--- subtask 3.2 ---")
console.log(student.name);
console.log(student["age"]);

student.school = "Universidad de Dagupan";
student["age"] = 21;

console.log("Updated Student:", student);

//subtask 4.1
let grades = [70, 80, 92, 68, 74, 88];

// map - add 5 bonus points to each grade for the students incentive
let incentives = grades.map(grade => grade + 5);
console.log("Boosted Grades:", incentives);

// filter - only show passing grades (75 and above)
let passingGrades = grades.filter(grade => grade >= 75);
console.log("Passing Grades:", passingGrades);

grades.forEach(grade => {
  console.log("Grade:", grade);
});