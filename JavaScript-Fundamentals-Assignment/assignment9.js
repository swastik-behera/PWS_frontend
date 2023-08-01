const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
let foundString = false;

for (let i = 0; i < arr.length; i++) {
  const firstString = arr[i];
  if (typeof firstString === "string") {
    console.log("Found the First String and it's value :", firstString);
    foundString = true;
    break;
  }
}

if (!foundString) {
  console.log("No string found in the array");
}
