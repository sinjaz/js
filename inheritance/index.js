log = console.log;

var sina = {
    name: 'Sina',
    age: 12,
    greet: function() {
        log(this.name + ' is ' + this.age + ' years old');
    }
};

sina.greet();
var ben = Object.create(sina, {
    name: {value: 'Ben'},
    age: {value: 8}
});

ben.greet();
