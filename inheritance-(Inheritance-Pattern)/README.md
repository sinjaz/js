# Inheritance using the Constructor Pattern

### 1. How to run
cd into the directory
```
cd inheritance-\(Inheritance-Pattern\)/
```

### 2. Run using node
```
node index.js
```

### Code Shortcut
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    log('Hi, this is' + this.name);
}

var sina = new Person('Sina');
```
