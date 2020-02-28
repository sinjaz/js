function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push (value) {
      const newNode = createNode(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }

      this.tail = newNode;
      this.length++;
      return newNode;
    },
    pop () {
      if (this.isEmpty()) {
        return null;
      }

      let oldTail = this.tail;

      if (this.length === 1) {
        const head = this.head;
        this.tail = null;
        this.head = null;
        this.length--;
        return head;
      }

      let current = this.head;
      let chosen;
      while (current) {
        if (current.next === this.tail) {
          chosen = current;
          break;
        }

        current = current.next;
      }
      chosen.next = null;
      this.tail = chosen;
      this.length--;
      return oldTail;
    },
    get (index) {
      if (index >= this.length) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let i = 0;
      let current = this.head;
      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    },
    delete (index) {
      if (0 > index || index >= this.length) {
        return null;
      }

      if (index === 0) {
        let deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }

      let i = 0;
      let current = this.head;
      let prev = this.head;
      while (i < index) {
        i++;
        prev = current;
        current = current.next;
      }

      const deleted = current;
      prev.next = current.next;

      return deleted;
    },
    isEmpty () {
      return this.length === 0;
    },
    print () {
      let node = this.head;
      let values = [];
      while (node !== null) {
        values.push(node.value);
        node = node.next;
      }

      return values.join(' => ');
    }
  }
}

const ll = createLinkedList();
ll.push('Sina');
ll.push('Ben');
ll.push('Sam');
console.log('------- PRINT ------');
console.log(ll.print());

console.log('------- DELETE ------');
console.log(ll.delete(1));

console.log('------- POP ------');
console.log(ll.pop());











