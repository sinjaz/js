# Inheritance using the Inheritance Pattern

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
function NEW_OBJECT(EXTENDED_PROPERTY) {
    OLD_OBJECT.call(this, 'BASIC_PROPERTY');
    this.EXTENDED_PROPERTY = EXTENDED_PROPERTY;
}
NEW_OBJECT.prototype = Object.create(OLD_OBJECT.prototype);
```
