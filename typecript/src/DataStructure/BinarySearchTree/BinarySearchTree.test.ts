import { BinarySearchTree, BinaryTreeNode } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  test("addNode", () => {
    const tree = new BinarySearchTree();
    const node = new BinaryTreeNode(1)
    tree.addNode(node);

    expect(tree.root?.value).toBe(node.value);
    expect(tree.root?.left).toBeNull();
    expect(tree.root?.right).toBeNull();
  });

  test("addNode2", () => {
    const tree = new BinarySearchTree();
    const node = new BinaryTreeNode(2)
    tree.addNode(node);
    const node2 = new BinaryTreeNode(2)
    tree.addNode(node2);

    expect(tree.root?.right?.value).toEqual(node2.value);

    const node3 = new BinaryTreeNode(3)
    tree.addNode(node3);

    expect(tree.root?.right?.right?.value).toEqual(node3.value);

    const node4 = new BinaryTreeNode(1)
    tree.addNode(node4);
    
    expect(tree.root?.left?.value).toEqual(node4.value);
  });

  describe("findNodeByValue", () => {
    test("can not find", () => {
      const tree = new BinarySearchTree();
      const node2 = new BinaryTreeNode(5)
      tree.addNode(node2);

      const result = tree.findNodeByValue(1)
      expect(result).toBeNull();
    })
    
    test("can find", () => {
      const tree = new BinarySearchTree();
      const node2 = new BinaryTreeNode(5)
      tree.addNode(node2);

      const result = tree.findNodeByValue(5)
      expect(result?.value).toBe(5);
    })
  })

  describe("delete", () => {
    test("delete root null", () => {
      const tree = new BinarySearchTree();
      const result = tree.delete(1);
  
      expect(tree.root).toBeNull();
      expect(result).toBe(false);
    })
  
    test("delete 存在しない値", () => {
      const tree = new BinarySearchTree();
      const node = new BinaryTreeNode(5)
      tree.addNode(node);
  
      expect(tree.root?.value).toEqual(node.value);
  
      const result = tree.delete(1);
      expect(result).toBe(false);
    })
  
    test("delete 存在する root", () => {
      const tree = new BinarySearchTree();
      const node = new BinaryTreeNode(5)
      tree.addNode(node);
  
      expect(tree.root?.value).toEqual(node.value);
  
      const result = tree.delete(5);
      expect(result).toBe(true);
      expect(tree.root).toBeNull();
    })
  })

  // test("delete3", () => {
  //   const tree = new BinarySearchTree();
  //   const node = new BinaryTreeNode(2)
  //   tree.addNode(node);

  //   expect(tree.root?.value).toEqual(node.value);

  //   const node2 = new BinaryTreeNode(1)
  //   tree.addNode(node2);

  //   expect(tree.root?.left?.value).toEqual(node2.value);

  //   const result = tree.delete(2);

  //   expect(tree.root?.value).toEqual(node2.value);
  // })

  // test("delete4", () => {
  //   const tree = new BinarySearchTree();
  //   const node = new BinaryTreeNode(2)
  //   tree.addNode(node);
  //   const node2 = new BinaryTreeNode(3)
  //   tree.addNode(node2);
  //   const node3 = new BinaryTreeNode(4)
  //   tree.addNode(node3);

  //   expect(tree.root?.value).toEqual(node.value);
  //   expect(tree.root?.right?.value).toEqual(node2.value);


  //   expect(tree.root?.value).toEqual(node2.value);
  // })
});
