let studentInfo = {
  name: "Peter",
  age: 15,
  grade: "A+",

  updatedGrade(newGrade) {
    this.grade = newGrade;
  },
};

console.log(`Student Name : ${studentInfo.name}`);
console.log(`Student Age : ${studentInfo.age}`);
console.log(`Student Grade : ${studentInfo.grade}`);

studentInfo.updatedGrade("B+")

console.log("Updated grade value is : ");
console.log(`Student Name : ${studentInfo.name}`);
console.log(`Student Age : ${studentInfo.age}`);
console.log(`Student Grade : ${studentInfo.grade}`);



/*========================
OUTPUT :
    Student Name : Peter
    Student Age : 15
    Student Grade : A+
    Updated grade value is :
    Student Name : Peter
    Student Age : 15
    Student Grade : B+
========================*/