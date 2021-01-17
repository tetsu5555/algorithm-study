class DoublyLinkedListNode {
  public value: any;
  public prev: DoublyLinkedListNode | null;
  public next: DoublyLinkedListNode | null;

  constructor(
    value: any,
    prev: DoublyLinkedListNode | null = null
  ) {
    this.value = value
    this.prev = prev
    this.next = null
  }
}

class DoublyLinkedList {
  public head: DoublyLinkedListNode | null;
  public tail: DoublyLinkedListNode | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any) {
    const newNode = new DoublyLinkedListNode(val);
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (!this.head || !this.tail) throw new Error('unexpected');

      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {

  }
}

export {
  DoublyLinkedList,
  DoublyLinkedListNode,
}
