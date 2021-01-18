import { Collection } from "../common";
interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
class Stack<T> extends Collection<T> implements IStack<T> {
  constructor(private capacity: number = Infinity) {
    super();
  };

  push(item: T) {
    if (this.isFull()) {
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

  isFull() {
    return this.capacity === this.size();
  }
}

export {
  Stack
};
