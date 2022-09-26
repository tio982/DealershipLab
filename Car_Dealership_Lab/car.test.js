const Car = require("./car.js");
const {
    manufacturer,
    price,
    engineType
} = require("./car.js")

 const car2 = Car("Mercedes","5000","diesel");

test("can check correct prices", () => { 
    expected = 5000;
    actual = Car.price;
    expect(actual).toBe(expected);
})

test("can check correct manufacturer", () => { 
    expected = "Mercedes";
    actual = console.log(car2.manufacturer);
    expect(actual).toBe(expected);
})
