let Queue = function () {
  let collection = [];

  this.print = function() {
    console.table(collection);
  }

  this.enqueue = function(item) {
    collection.push(item);
  }

  this.dequeue = function (item) {
    return collection.shift();
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function () {
    return collection.length;
  }

  this.isEmpty = function () {
    return collection.length === 0;
  }
}

let myQueue = new Queue();
myQueue.enqueue('Sina');
myQueue.enqueue('Ben');
myQueue.enqueue('Sam');

myQueue.print();
myQueue.dequeue();
myQueue.print();
