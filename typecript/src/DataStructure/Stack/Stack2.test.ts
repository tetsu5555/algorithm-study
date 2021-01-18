import { Stack } from "./Stack2";

describe("Stack", () => {
  test("push", () => {
    const stack = new Stack<string>();
    stack.push("A");

    expect((stack as any).storage[0]).toEqual("A");
    expect((stack as any).storage.length).toBe(1)
  })

  test("pop", () => {
    const stack = new Stack<string>();
    stack.push("A");
    const pop_result = stack.pop();

    expect(pop_result).toEqual("A");
    expect((stack as any).storage.length).toBe(0)
  })

  test("peek", () => {
    const stack = new Stack<string>();
    stack.push("A");
    const peek_result = stack.peek();

    expect(peek_result).toEqual("A");
    expect((stack as any).storage.length).toBe(1)
  })

  test("size", () => {
    const stack = new Stack<string>();
    const size_result = stack.size();
    expect(size_result).toEqual(0);

    stack.push("A");
    const size_result_after_push = stack.size();
    expect(size_result_after_push).toEqual(1);
  })
});
