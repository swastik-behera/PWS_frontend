let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i < arr.length; i++) {
  const positive = arr[i];
  if (positive >= 0) {
    console.log(positive);
  }
}


/*==============
    Output:
      1
      2
      5
      7
==============*/