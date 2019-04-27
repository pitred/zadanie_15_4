function Phone(brand, price, color, screen, memory) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
    this.memory = memory;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " pln.");
}
Phone.prototype.printData = function () {
    console.log("The screen size of " + this.brand + " is " + this.screen + " inch, and he has " + this.memory + "GB build in memory.");
}
var samsungGalaxyS6 = new Phone('Samsung', 1399, 'blue', "5,1", 32);
var iPhone6S = new Phone('Apple', 1199, 'space grey', "4,7", 16);
var onePlusOne = new Phone('OnePlus', 1299, 'black', "5,5", 16);

samsungGalaxyS6.printInfo();
samsungGalaxyS6.printData();

iPhone6S.printInfo();
iPhone6S.printData();
onePlusOne.printInfo();
onePlusOne.printData();