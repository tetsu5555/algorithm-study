import { DoublyLinkedList, DoublyLinkedListNode } from "./DoublyLinkedList"

type Book = {
  readonly name: string;
}
const book: Book = { name: 'book1' };
const book2: Book = { name: 'book2' };

describe('doublyLinkedList', () => {
  test('initialize', () => {
    const dll = new DoublyLinkedList();

    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.length).toBe(0)
  })
  
  test('push', () => {
    const doublyLinkedList = new DoublyLinkedList<Book>();
    doublyLinkedList.push(book);

    expect(doublyLinkedList.head?.data).toEqual(book);
    expect(doublyLinkedList.tail?.data).toEqual(book);
    expect(doublyLinkedList.length).toBe(1);
  })

  test('push double', () => {
    const doublyLinkedList = new DoublyLinkedList<Book>();
    doublyLinkedList.push(book);
    doublyLinkedList.push(book2);

    expect(doublyLinkedList.head?.data).toEqual(book);
    expect(doublyLinkedList.tail?.data).toEqual(book2);
    expect(doublyLinkedList.length).toBe(2);
  })

  test("linked", () => {
    const doublyLinkedList = new DoublyLinkedList<Book>();
    doublyLinkedList.push(book);
    doublyLinkedList.push(book2);

    expect(doublyLinkedList.head?.next?.data).toBe(book2);
    expect(doublyLinkedList.head?.prev).toBeNull();
    expect(doublyLinkedList.tail?.prev?.data).toBe(book);
    expect(doublyLinkedList.tail?.next).toBeNull();
  })
})
