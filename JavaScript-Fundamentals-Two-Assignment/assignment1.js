let userList = ["Sujit", "Ajay", "Peter", "Mithun", "John", "Amar"];

function isUserPresent(isPresent) {

  for (let i = 0; i < userList.length; i++) {

    if (userList[i] == isPresent) {
      console.log(`Yes, ${isPresent} is a valid user.`);
      return;
    }
  }
  console.log(`No, ${isPresent} is not a valid user.`);
}

isUserPresent("Peter");

isUserPresent("Swastik");



/*====================
Output:
  Yes, Peter is a valid user.

  No, Swastik is not a valid user.
====================*/