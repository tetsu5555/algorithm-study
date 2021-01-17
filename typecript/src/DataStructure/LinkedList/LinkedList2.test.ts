import { LinkedList } from "./LinkedList2";

describe("LinkedList", () => {
  test("ok", () => {
    interface Post {
      title: string;
    }
    const linkedList = new LinkedList<Post>();
    
    const first_traverse_result = linkedList.traverse();
    const expected_first_traverse_result = [];
    expect(first_traverse_result).toEqual(expected_first_traverse_result);
    
    linkedList.insertAtEnd({ title: "Post A" });
    linkedList.insertAtEnd({ title: "Post B" });
    linkedList.insertInBegin({ title: "Post C" });
    linkedList.insertInBegin({ title: "Post D" });
    
    const traverse_result = linkedList.traverse()
    const expected = [
      { title : "Post D" },
      { title : "Post C" },
      { title : "Post A" },
      { title : "Post B" }
    ];
    expect(traverse_result).toEqual(expected);
  
    const search_result = linkedList.search(({ title }) => title === "Post A");
    expect(search_result?.data).toEqual(expected[2]);
  })
});
