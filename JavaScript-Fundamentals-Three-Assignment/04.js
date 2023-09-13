function objProp(obj, propertyName) {

  if (obj !== null && obj !== undefined) {

    if (obj.hasOwnProperty(propertyName)) {
      return true;
    }
  }
  return false;
}

let myObj = {
  name: "swastik",
  class: 9,
  roll: 101,
};

console.log(objProp(myObj, "name"));
console.log(objProp(myObj, "age"));
console.log(objProp(null, "name"));



/*========================
OUTPUT :
    true
    false
    false
========================*/