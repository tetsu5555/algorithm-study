import { Collection } from "../common"

interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
}

class Queue<T> extends Collection<T> implements IQueue<T> {
  constructor(private capacity: number = Infinity) {
    super();
  }

  enqueue(item: T): void {
    if (this.isFull()) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  isFull(): boolean {
    return this.capacity === this.size();
  }
}

export {
  Queue
};
