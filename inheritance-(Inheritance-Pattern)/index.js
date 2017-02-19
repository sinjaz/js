log = console.log;

function Beverage(name, age) {
    this.name = name;
}

Beverage.prototype.drink = function () {
    log('I am drinking ' + this.name);
}

function Coffee(type) {
    Beverage.call(this, 'Coffee');
    this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);
Coffee.prototype.sip = function () {
    log("Sipping some " + this.type + " " + this.name);
}

var water = new Beverage('Water');
var coffee = new Coffee('Bold');
water.drink();
coffee.drink();
coffee.sip();
