import { binarySearch } from "./exam";

describe('binarySearch', () => {
  test('success', () => {
    const sortedArray = [2];
    const searchTarget = 2;
    const result = binarySearch(sortedArray, searchTarget)
    expect(result).toBe(true)
  })

  test('fail', () => {
    const sortedArray = [2];
    const searchTarget = 3;
    const result = binarySearch(sortedArray, searchTarget)
    expect(result).toBe(false)
  })

  test('success multiple', () => {
    const sortedArray = [9, 2];
    const searchTarget = 2;
    const result = binarySearch(sortedArray, searchTarget)
    expect(result).toBe(true)
  })

  test('success multiple', () => {
    const sortedArray = [9, 8, 2];
    const searchTarget = 2;
    const result = binarySearch(sortedArray, searchTarget)
    expect(result).toBe(true)
  })
  
  test('success multiple', () => {
    const sortedArray = [9, 8, 5, 6, 2];
    const searchTarget = 2;
    const result = binarySearch(sortedArray, searchTarget)
    expect(result).toBe(true)
  })
  
  test('fail multiple', () => {
    const sortedArray = [9, 2];
    const searchTarget = 3;
    const result = binarySearch(sortedArray, searchTarget)
    expect(result).toBe(false)
  })
})