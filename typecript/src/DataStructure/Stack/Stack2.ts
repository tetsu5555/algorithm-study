interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {};

  push(item: T) {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  };

  pop() {
    return this.storage.pop();
  };

  peek() {
    return this.storage[this.size() - 1];
  }

  size() {
    return this.storage.length;
  }
}

export {
  Stack
};
