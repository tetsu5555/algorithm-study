import { bubbleSort } from "./BubbleSort";

describe('quickSort2', () => {
  // @ts-ignore
  test('should sort', () => {
    const target = [7, 5, 10, 3, 4];
    const expected = [3, 4, 5, 7, 10];
    const result = bubbleSort(target)
    
    expect(result).toStrictEqual(expected);
  });

  // @ts-ignore
  test('test not sorted', () => {
    const target = [7, 5, 10, 3, 4];
    const expected = [7, 5, 10, 3, 4];
    const result = bubbleSort(target)
    
    expect(result).not.toStrictEqual(expected);
  });
})
