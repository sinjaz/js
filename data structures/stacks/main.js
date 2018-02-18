let Stack = function () {

  this.stuff = [];
  this.count = 0;

  this.push = function (item) {
    this.stuff[this.count] = item;
    this.count++;
  }

  this.peek = function () {
    return this.stuff[this.count - 1];
  }

  this.pop = function () {
    this.count--;
    let lastThing = this.stuff[this.count];
    delete this.stuff[this.count];
    return lastThing;
  }

  this.size = function () {
    return this.count;
  }
}

let stuff = new Stack();
stuff.push('sin');
stuff.push('ben');
stuff.push('joe');

console.log(stuff.size());
console.log(stuff.pop());
console.log(stuff.size());
console.log(stuff.pop());