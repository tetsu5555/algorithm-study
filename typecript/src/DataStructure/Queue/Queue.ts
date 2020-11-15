class Queue {
  private data: any[];
  constructor() {
    this.data= []
  }

  enqueue(value: any) {
    this.data.unshift(value)
  }

  dequeue() {
    return this.data.pop()
  }
}

export { Queue }
