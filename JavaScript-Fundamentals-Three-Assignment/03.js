function countProperties(object) {
    const keyArray = Object.keys(object)
    return keyArray.length;
}

let studentInfo = {
    name: "Peter",
    age: 15,
    grade: "A+",
};

let myArr = countProperties(studentInfo)

console.log(`Number of properties : ${myArr}`);



/*========================
OUTPUT :
    Number of properties : 3
========================*/