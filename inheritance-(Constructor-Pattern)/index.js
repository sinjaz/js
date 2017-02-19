log = console.log;

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    log(this.name + ' is ' + this.age + ' years old.');
}

var sina = new Person('Sina', 12);
sina.greet();
var ben = new Person('Ben', 9);
ben.greet();

log(sina instanceof Person); // true
log(sina === ben); // false
