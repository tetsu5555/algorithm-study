import { Queue } from "./Queue";

describe('Queue', () => {
  test('enqeue', () => {
    const queue = new Queue()
    const expected = ['test']
    queue.enqueue(expected[0])

    const result = (queue as any).data;
    expect(result).toStrictEqual(expected)
  })

  test('enqeue multiple', () => {
    const queue = new Queue()
    const expected = ['test', 'test2', 'test3']
    queue.enqueue(expected[0])
    queue.enqueue(expected[1])
    queue.enqueue(expected[2])

    const result = (queue as any).data;
    expect(result[0]).toStrictEqual(expected[2])
    expect(result[1]).toStrictEqual(expected[1])
    expect(result[2]).toStrictEqual(expected[0])
  })

  test('dequeue should return value', () => {
    const queue = new Queue()
    const expected = 'test'
    queue.enqueue(expected)

    const result = queue.dequeue()
    expect(result).toBe(expected)
  })

  test('dequeue should return in FIFO order', () => {
    const queue = new Queue()
    const expected = ['test', 'test2', 'test3']
    queue.enqueue(expected[0])
    queue.enqueue(expected[1])
    queue.enqueue(expected[2])

    const result = queue.dequeue()
    expect(result).toBe(expected[0])

    const result2 = queue.dequeue()
    expect(result2).toBe(expected[1])
  })
})