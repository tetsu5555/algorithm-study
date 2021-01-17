// 連結リストの要素
class LinkedListNode {
  public value: any;
  public next: LinkedListNode | null;
  
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  public head: LinkedListNode | null;
  
  constructor() {
    this.head = null
  }

  // 末尾の要素を追加する
  push(value: any) {
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

  unshift(value: any) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }
}

export {
  LinkedList,
}
