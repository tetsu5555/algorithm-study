import { Stack } from "./Stack";

describe("Stack", () => {
  test("push", () => {
    const expected = [1]
    const stack = new Stack()
    stack.push(expected[0])

    const result = (stack as any).data
    expect(result).toStrictEqual(expected)
  })

  test("should push multiple values", () => {
    const expected = [1, 2]
    const stack = new Stack()
    stack.push(expected[0])
    stack.push(expected[1])

    const result = (stack as any).data
    expect(result).toStrictEqual(expected)
  })

  test("pop return value", () => {
    const stack = new Stack()
    stack.push(1)

    const result = stack.pop()
    expect(result).toStrictEqual(1)
  })

  test("pop should return last added value", () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)

    const result = stack.pop()
    expect(result).toStrictEqual(2)
  })
})