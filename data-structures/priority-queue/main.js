let PriorityQueue = function () {
  let collection = [];

  this.print = function() {
    console.table(collection);
  }

  this.enqueue = function(item) {
    if(this.isEmpty()) {
      collection.push(item);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (item[1] < collection[i][1]) {
          collection.splice(i, 0, item);
          added = true;
          return;
        }
      }
      if (!added) {
        collection.push(item);
      }
    }
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

let myQueue = new PriorityQueue();
myQueue.enqueue(['Sina', 1]);
myQueue.enqueue(['Sam', 3]);
myQueue.enqueue(['Ben', 2]);

myQueue.print();
myQueue.dequeue();
myQueue.print();
