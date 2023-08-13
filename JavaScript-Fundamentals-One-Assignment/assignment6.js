let name = "Mithun";
let email = "mithun.s@pw.live";
let age = 21;

if (typeof name !== "string") {
  console.log("Name should be a string");
} else {
  console.log("Name is valid.");
}

if (typeof email !== "string") {
  console.log("Email should be a string");
} else {
  console.log("Email is valid.");
}

if (typeof age !== "number") {
  console.log("Age should be a number");
} else {
  console.log("Age is valid.");
}


/*==============
    Output:
      Name is valid.
      Email is valid.
      Age is valid.
==============*/