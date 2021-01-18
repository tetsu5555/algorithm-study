import { MaxBinaryHeap } from "./MaxBinaryHeap";

describe("MaxBinaryHeap", () => {
  describe("insert", () => {
    test("insert", () => {
      const maxBinaryHeap = new MaxBinaryHeap();
      maxBinaryHeap.insert(1);

      expect(maxBinaryHeap.values).toEqual([1]);
    })

    test("insert", () => {
      const maxBinaryHeap = new MaxBinaryHeap();
      const nums = [2, 3, 5, 9, 8, 1]
      const result = [9, 8, 3, 2, 5, 1]
      // insertしていくとこの並びになる
      nums.forEach(num => {
        maxBinaryHeap.insert(num)
      })
      
      result.forEach((res, index) => {
        expect(maxBinaryHeap.values[index]).toBe(res)
      })
    })
  })

  describe("extractMax", () => {
    test("insert", () => {
      const maxBinaryHeap = new MaxBinaryHeap();
      const nums = [2, 3, 5, 9, 8, 1]
      // insertしていく
      nums.forEach(num => {
        maxBinaryHeap.insert(num)
      })
      // extract後の結果
      const result = [8, 5, 3, 2, 1]

      const extracted_result = maxBinaryHeap.extractMax();
      expect(extracted_result).toBe(9);

      result.forEach((res, index) => {
        expect(maxBinaryHeap.values[index]).toBe(res)
      })
    })
  })
})
