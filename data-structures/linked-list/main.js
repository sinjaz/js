function LinkedList() {
  this.head = null;

  this.print = function() {
    console.log(this.head);
  }

  function Node(info) {
    this.info = info;
    this.next = null;
  }

  this.add = function(info) {
    if (!this.head) {
      this.head = new Node(info);
    } else { 
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(info);
    }
  }

  this.remove = function(info) {
    let currentNode = this.head;
    let previousNode = null;

    if (currentNode.info === info) {
      this.head = currentNode.next;
    } else { 
      while (currentNode.info !== info) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
  }

  this.indexOf = function(info) {
    let index = -1;
    let currentNode = this.head;
    while (currentNode) {
      index++;
      if (currentNode.info === info) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  this.elementAt = function(index) {
    let count = 0;
    let currentNode = this.head;
    while (count < index) {
      count++
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  this.addAt = function(info, index) {
    let newNode = new Node(info);
    newNode.info = info;

    let count = 0;
    let currentNode = this.head;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (count < index-1) {
        count++;
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  this.removeAt = function(index) {
    let count = 0;
    let currentNode = this.head;
    let previousNode;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (count < index) {
        count++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
  }
}

let ll = new LinkedList();
ll.add('Sina');
ll.add('Ben');
ll.add('Sam');
ll.add('Ala');

console.log("------ REMOVE (Ben) ------");
ll.remove('Ben');
ll.print();

console.log("------ IndexOf ------");
console.log(ll.indexOf('Sam'));

console.log("------ ELEMENT AT (1) ------");
console.log(ll.elementAt(2));

console.log("------ ADD AT (1) ------");
ll.addAt('Zohre', 1);
ll.print();

console.log('------ REMOVE AT (1) ------');
ll.removeAt(1);
ll.print();



