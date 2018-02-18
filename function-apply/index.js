let log = console.log;

let sina = {
    firstName: 'Sina',
    lastName: 'Jaz',
    greet: function(msg1, msg2) {
        log(`${msg1} ${this.firstName} ${this.lastName}. ${msg2}`);
    }
}

sina.greet('Hello', 'What up?'); 
// Hello Sina Jaz. What up?

let ben = {
    firstName: 'Ben',
    lastName: 'Jaz'
}

sina.greet.apply(ben, ['Hi', 'How are you?']); 
// Hello Ben Jaz. How are you?