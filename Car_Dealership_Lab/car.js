
const Car = function(manufacturer,price,engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.getManufacturer = function() { return this.manufacturer};
Car.prototype.setManufacturer = function(manufacturer) { this.manufacturer = manufacturer };
Car.prototype.setPrice = function(price) { this.price = price };
Car.prototype.getPrice = function() { return this.price };
Car.prototype.setEngineType = function(engineType) { this.engineType = engineType};
Car.prototype.getEngineType = function() { return this.engineType };

 const car1 = new Car("BMW","10000","diesel");
 const car2 = new Car("Mercedes","5000","diesel");
 const car3 = new Car("Ford","2000","petrol");


 module.exports = Car;

 console.log(car1.engineType)


