class DoublyLinkedListNode<T> {
  public prev: DoublyLinkedListNode<T> | null = null;
  public next: DoublyLinkedListNode<T> | null = null;

  constructor(public data: T) {}
}

class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T> | null;
  public tail: DoublyLinkedListNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data: T) {
    const newNode = new DoublyLinkedListNode(data);
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      (this.tail as DoublyLinkedListNode<T>).next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop(): DoublyLinkedListNode<T> | null {
    if (this.length === 0) return null;
    if (this.tail === null) return null;
    
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev as DoublyLinkedListNode<T>;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
}

export {
  DoublyLinkedList,
  DoublyLinkedListNode,
}
