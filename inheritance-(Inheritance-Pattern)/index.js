log = console.log;

function Beverage(name, age) {
    this.name = name;
    this.tempreture = age;
}

Beverage.prototype.drink = function () {
    log('I am drinking ' + this.name);
}

function Coffee
