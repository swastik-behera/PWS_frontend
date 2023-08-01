let username = "admin";
let password = "12345";

switch (username) {
  case "admin":
    if (password === "12345") {
      console.log("Login Successful");
    } else {
      console.log("Invalid credential");
    }
    break;

  default:
    console.log("Invalid credential");
    break;
}
