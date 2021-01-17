import { quickSort2 } from "./QuickSort";

describe('quickSort2', () => {
  // @ts-ignore
  test('test1', () => {
    const target = [7, 1, 9];
    const expected = [1, 7, 9]
    const result = quickSort2(target)
    
    expect(result).toStrictEqual(expected);
  });

  // @ts-ignore
  test('test2', () => {
    const target = [1, 3, 7, 9, 7, 9];
    const expected = [1, 3, 7, 7, 9, 9]
    const result = quickSort2(target)
    
    expect(result).toStrictEqual(expected);
  });

  // @ts-ignore
  test('test3', () => {
    const target = [];
    const expected = []
    const result = quickSort2(target)
    
    expect(result).toStrictEqual(expected);
  });
  
  // @ts-ignore
  test('test4', () => {
    const target = [7];
    const expected = [7]
    const result = quickSort2(target)
    
    expect(result).toStrictEqual(expected);
  });

  // @ts-ignore
  test('test5', () => {
    const target = [7];
    const expected = [8]
    const result = quickSort2(target)
    
    expect(result).not.toStrictEqual(expected);
  });

  // @ts-ignore
  test('test6', () => {
    const target = [1, 3, 7, 9, 7, 9];
    const expected = [1, 3, 7, 9, 7, 9];
    const result = quickSort2(target)
    
    expect(result).not.toStrictEqual(expected);
  });

  // @ts-ignore
  test('test7', () => {
    const target = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    const result = quickSort2(target)
    
    expect(result).toStrictEqual(expected);
  });

  // @ts-ignore
  test('test8', () => {
    const target = [-5, -4, -3, -2, -1];
    const expected = [-5, -4, -3, -2, -1];
    const result = quickSort2(target)
    
    expect(result).toStrictEqual(expected);
  });
})