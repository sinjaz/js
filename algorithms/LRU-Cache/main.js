let LRUCache = function(capacity) {
  this.collection = new Map();
  this.capacity = capacity;
}

LRUCache.prototype.print = function() {
  console.log(this.collection);
}

LRUCache.prototype.put = function(key, value) {
  if (this.collection.has(key)) {
    this.collection.delete(key);
    this.collection.set(key, value);
  } else {
    if (this.collection.size === this.capacity) {
      for ([k, v] of this.collection) {
        this.collection.delete(k);
        break;
      }
    }
    this.collection.set(key, value);
  }
}

LRUCache.prototype.get = function(key) {
  if (this.collection.has(key)) {
    let obj = this.collection.get(key);
    this.collection.delete(key);
    this.collection.set(key, obj);
    return obj;
  }
  return -1
};



let cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);
// cache.put(3, 3);
// cache.get(2);
// cache.put(4, 4);
// cache.get(1);
// cache.get(3);
// cache.get(4);

cache.put(2, 1);
cache.put(2, 2);
cache.get(2);
cache.put(1, 1);
cache.put(4, 1);
cache.get(2);





