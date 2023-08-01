/*
standard = 3-5 days
express = 1-2 days
overnight = delivered the next day
*/

let typeOfPackage = "standard";

switch (typeOfPackage) {
  case "standard":
    console.log("might take 3-5 days");
    break;

  case "express":
    console.log("delivered in 1-2 days");
    break;

  case "overnight":
    console.log("delivered overnight");
    break;

  default:
    break;
}
