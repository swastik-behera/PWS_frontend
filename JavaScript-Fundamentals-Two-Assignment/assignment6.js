const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Gray",
    hardDisk: "256 GB"
}

for (let property in productDetails) {
    console.log(`${property} : ${productDetails[property]}`);
}



/*====================
Output:
    Below are the product details.
    name : Apple 2020 MacBook Air Laptop
    price : 82000
    color : Gray
    hardDisk : 256 GB
====================*/