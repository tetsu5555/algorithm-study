import { reversedbubbleSort } from "./exam";

describe('reversedbubbleSort', () => {
  test('should return reversed array', () => {
    const target = [9, 2, 4];
    const expected = [9, 9, 7, 5, 4];

    const result = reversedbubbleSort(target);
    expect(result).toBe(expected)
  })
})
