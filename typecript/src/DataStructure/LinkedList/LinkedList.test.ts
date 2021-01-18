import { LinkedList } from "./LinkedList";

type Book = {
  readonly name: string;
}
const book: Book = { name: 'book1' };
const book2: Book = { name: 'book2' };

describe("LinkedList", () => {
  test("push", () => {
    const linkedList = new LinkedList<Book>();
    linkedList.push(book);

    expect(linkedList.head?.value).toEqual(book);
  })

  test("push double", () => {
    const linkedList = new LinkedList<Book>();
    linkedList.push(book);
    linkedList.push(book2);

    expect(linkedList.head?.value).toEqual(book);
    expect(linkedList.head?.next?.value).toEqual(book2);
  })

  test("unshift", () => {
    const linkedList = new LinkedList<Book>();
    linkedList.unshift(book);

    expect(linkedList.head?.value).toEqual(book);
  })

  test("unshift double", () => {
    const linkedList = new LinkedList<Book>();
    linkedList.unshift(book);
    linkedList.unshift(book2);

    expect(linkedList.head?.value).toEqual(book2);
    expect(linkedList.head?.next?.value).toEqual(book);
  })
})
