let log = console.log;

let sina = {
    firstName: 'Sina',
    lastName: 'Jaz',
    greet: function(msg) {
        log(`${msg} ${this.firstName} ${this.lastName}.`);
    }
}

sina.greet('Hello'); // Hello Sina Jaz

let ben = {
    firstName: 'Ben',
    lastName: 'Jaz'
}

sina.greet.call(ben, 'Hi'); // Hello Ben Jaz