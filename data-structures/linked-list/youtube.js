class LinkedList {
  constructor () {
    this.head = this.tail = null;
  }

  append(val) {
    let node = new Node(val);

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      let oldTail = this.tail;
      this.tail = node;
      oldTail.next = node;
      node.prev = oldTail;
    }
  }

  prepend(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node.next;
      oldHead.prev = node;
      node.next = oldHead;
    }
  }
}

class Node {
  constructor (val, prev, next) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
  }
}