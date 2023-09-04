const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1999 },
]

function checkPrice(items) {
    let maxProduct = items[0]
    let minProduct = items[0]

    for (let i = 1; i < items.length; i++) {
            
        if (items[i].price > maxProduct.price) {
            maxProduct = items[i]
        }

        if (items[i].price < minProduct.price) {
            minProduct = items[i]
        }
    }

    console.log(`The product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`);
    console.log(`The product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`);
}

checkPrice(products)



/*====================
Output:
    The product with maximum amount is Laptop which is priced at Rs. 120000
    
    The product with minimum amount is Mobile Charger which is priced at Rs. 1999
====================*/
