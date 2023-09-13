const car = {
    make: "BMW",
    model: "2023 BMW X3",
    year: 2023,
}

function carInfo(keys) {
        for (const key in keys) {
            console.log(`${key}: ${keys [key]}`);
        }
      }
carInfo(car);



/*========================
OUTPUT :
    make: BMW
    model: 2023 BMW X3
    year: 2023
========================*/