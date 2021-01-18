// 連結リストの要素
class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;
  constructor(public value: T) {}
}

class LinkedList<T> {
  public head: LinkedListNode<T> | null = null;

  // 末尾の要素を追加する
  push(value: T): void {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next
    }

    current.next = node;
  }

  unshift(value: T): void {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }
}

export {
  LinkedList,
}
