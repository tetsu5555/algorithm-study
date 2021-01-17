class MaxBinaryHeap {
  public values: number[] = [];

  public insert(value: number) {
    if (this.values.length === 0) {
      this.values.push(value);
      return true;
    }

    this.values.push(value)

    return this.bubbleUp();
  }

  private bubbleUp(): boolean {
    let index = this.values.length - 1;
    const element = this.values[index];
    let parentIndex = Math.floor((index - 1) / 2);

    while (parentIndex >= 0 && this.values[parentIndex] < element) {
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = element;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return true;
  }

  public extractMax(): number {
    if (this.values.length === 0) throw new Error('error');

    let max = this.values[0];
    let end = this.values.pop() as number;

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  private sinkDown() {
    let parentIdx = 0;
    let leftChildIdx = 0;
    let rightChildIdx = 0;
    let heapLength = this.values.length;

    let nodeToSink = this.values[parentIdx];
    let idxToSwap = 0;
    let swap = false;
    // Keep looping through the nodes util you find the right spot
    while (true) {
      leftChildIdx = (2 * parentIdx) + 1;
      rightChildIdx = (2 * parentIdx) + 2;

      swap = false;
      let leftChild: number | null = null;
      let rightChild: number | null = null;

      // Check with the left child only if it is a valid index
      if (leftChildIdx < heapLength) {
        leftChild = this.values[leftChildIdx];
        // Compare with the node to sink down
        if (nodeToSink < leftChild) {
          idxToSwap = leftChildIdx;
          swap = true;
        }
      }

      // Check with the right child only if it is a valid index
      if (rightChildIdx < heapLength) {
        rightChild = this.values[rightChildIdx];

        if ((swap && (leftChild as number) < rightChild) ||
          (!swap && nodeToSink < rightChild)) {
          idxToSwap = rightChildIdx;
          swap = true;
        }
      }

      if (!swap) {
        // If there is no swap required, we found the correct spot for the element
        return;
      } else {
        // Swap the elements
        this.values[parentIdx] = this.values[idxToSwap];
        this.values[idxToSwap] = nodeToSink;

        // Set the reference to index to its new value
        parentIdx = idxToSwap;
      }

    }
  }
}

export {
  MaxBinaryHeap
}
