log = console.log;

function Beverage(name) {
    this.name = name;
}

Beverage.prototype.drink = function () {
    log('I am drinking ' + this.name);
}

function Cocktail(type) {
    Beverage.call(this, 'Cocktail');
    this.type = type;
}

Cocktail.prototype = Object.create(Beverage.prototype);
Cocktail.prototype.sip = function () {
    log("Sipping some " + this.type + " " + this.name);
}

var water = new Beverage('Water');
var oldFashioned = new Cocktail('Old Fashioned');
water.drink();
oldFashioned.drink();
oldFashioned.sip();
