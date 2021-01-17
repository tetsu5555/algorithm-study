import { DoublyLinkedList, DoublyLinkedListNode } from "./DoublyLinkedList"


describe('doublyLinkedList', () => {
  test('initialize', () => {
    const dll = new DoublyLinkedList();

    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.length).toBe(0)
  })
  
  test('push', () => {
    const dll = new DoublyLinkedList();
    const dlln = new DoublyLinkedListNode(10);
    dll.push(10);

    expect(dll.head).toEqual(dlln)
    expect(dll.tail).toEqual(dlln)
    expect(dll.length).toEqual(1)
  })

  test('push2', () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    dll.push(2);

    const first = new DoublyLinkedListNode(1);
    const second = new DoublyLinkedListNode(2);
    first.next = second;
    second.prev = first;

    expect(dll.head).toEqual(first)
    expect(dll.tail).toEqual(second)
    expect(dll.length).toEqual(2)
  })

  test('push3', () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);

    const first = new DoublyLinkedListNode(1);
    const second = new DoublyLinkedListNode(2);
    first.next = second;
    second.prev = first;
    const third = new DoublyLinkedListNode(3);
    second.next = third;
    third.prev = third;

    expect(dll.head?.value).toEqual(first.value);
    expect(dll.head?.prev).toEqual(null);
    expect(dll.head?.next).toEqual(second)

    expect(dll.tail?.value).toEqual(third.value);
    expect(dll.length).toEqual(3);
  })
})
