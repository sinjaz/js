log = console.log;

function Person(name='Dude', age=10) {
    let _name = name;
    this.age = age;

    this.greet = function(){
        return `Hello ${_name}`;
    }

    this.getName = function() {
        return _name;
    }
}

function Engineer(name) {
    Person.call(this, name);
    this.job = 'Engineer';

    let _name = this.getName();
    this.specialGreet = function () {
        return `What up ${_name}`;
    }
}

Engineer.prototype = Object.create(Person.prototype);
Engineer.prototype.salary = 'Huge';

let pete = new Person('Pete');
let sin = new Engineer('Sin');
log(sin.specialGreet());