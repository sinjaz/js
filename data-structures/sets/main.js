let MySet = function() {
  this.stuff = [];

  this.has = function(item) {
    return (this.stuff.indexOf(item) !== -1)
  }

  this.values = function() {
    return this.stuff;
  }

  this.union = function(anotherSet) {
    let unionSet = new MySet();
    this.stuff.forEach(function (item) {
      unionSet.add(item);
    });
    anotherSet.values().forEach(function(item) {
      unionSet.add(item);
    });
    return unionSet;
  }

  this.intersection = function(anotherSet) {
    let intersectionSet = new MySet();
    this.stuff.forEach(function (item) {
      if(anotherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  }

  this.difference = function (anotherSet) {
    let intersectionSet = new MySet();
    this.stuff.forEach(function (item) {
      if (!anotherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  }

  this.add = function(item) {
    const index = this.stuff.indexOf(item);
    if (index === -1) {
      this.stuff.push(item);
    } else {
      this.stuff.splice(index, 1);
      this.stuff.push(item);
    }
  }
}

let set1 = new MySet();
set1.add('Sina');
set1.add('Jack');
set1.add('Ben');

let set2 = new MySet();
set2.add('Dog');
set2.add('Sina');
set2.add('Rooster');
console.table(set1.values());
console.table(set2.values());
console.table(set1.union(set2).values());
console.table(set1.intersection(set2).values());
console.table(set1.difference(set2).values());
console.table(set2.difference(set1).values());
