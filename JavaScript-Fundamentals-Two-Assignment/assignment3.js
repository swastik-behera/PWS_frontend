const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];

function checkResults(studentName) {
  for (let i = 0; i < students.length; i++) {

    if (students[i].name === studentName) {

      if (students[i].marks > 90) {

        console.log(
          `Congratulations ${studentName}! You have cleared the exam.`
        );
      } else {
        console.log("Sorry ! You have not cleared the exam.");
      }
      return;
    }
  }
  console.log("Invalid user !!!");
}

checkResults("Swastik");



/*====================
Output:
    checkResults("Mithun");
        Congratulations Mithun! You have cleared the exam.
    checkResults("Shivam")
        Sorry ! You have not cleared the exam.
    checkResults("Swastik")
        Invalid user !!!
====================*/
