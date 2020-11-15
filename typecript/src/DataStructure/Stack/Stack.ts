class Stack {
  private data: number[];
  constructor() {
    this.data = []
  }

  push(data: number) {
    this.data.push(data)
  }

  pop() {
    return this.data.pop();
  }
}

export { Stack }
