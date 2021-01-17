import ts from "typescript";
import { BinarySearchTree, BinaryTreeNode } from "./BinarySearchTree";
import { generateRandomNum } from "../../util";

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
});
