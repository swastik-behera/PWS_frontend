function calculateTotalCartValue(...userCart) {

  let total = 0;

  for (let i = 0; i < userCart.length; i++) {  
    total += userCart[i]
  }
  console.log(`The total cart value is ${total}`);
}

calculateTotalCartValue(125, 20, 35, 120)



/*====================
Output:
  The total cart value is 300
====================*/