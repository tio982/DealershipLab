const Car = require("./car");

const dealership = function (name,maxCapacity,currentStock){
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.currentStock = [];
}; 

Dealership.prototype.getName = function() { return this.name};
Dealership.prototype.setName = function(name) { this.name = this.name };
Dealership.prototype.getMaxCapacity = function() { return this.maxCapacity};
Dealership.prototype.setMaxCapacity = function(maxCapacity) { this.capacity = this.maxCapacity };
Dealership.prototype.getCurrentStock = function() { return this.currentStock};
Dealership.prototype.setCurrentStock = function(currentStock) { this.currentStock = this.currentStock};


const dealership1 = new dealership("Clarks",10,7)

Dealership.prototype.addCar = function (newCar) {
    this.car = newCar;
    return currentStock.push(Car)};

Dealership.prototype.countCurrentstock = function() {
    return currentStock.length};

 Dealership.prototype.CarManufacturer= function() {
        return Car.map (({manufacturer})) = manufacturer};

        module.exports = Car








