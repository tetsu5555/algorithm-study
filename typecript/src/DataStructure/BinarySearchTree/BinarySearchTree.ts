class BinaryTreeNode {
  // 左の子ノード
  public left: BinaryTreeNode | null = null;
  // 右の子ノード
  public right?: BinaryTreeNode | null = null;
  
  // valueはそのノードの値
  constructor(public value: number) {};
}

const LEFT = 'left' as const;
const RIGHT = 'right' as const;

class BinarySearchTree {
  // 一番上のノード
  public root: BinaryTreeNode | null = null;
  
  addNode(node: BinaryTreeNode) {
    // まだrootノードがなければそれを一番上のノードとする
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    let direction = node.value < current.value ? LEFT : RIGHT;
    while (current[direction]) {
      current = current[direction] as BinaryTreeNode;
      direction = node.value < current.value ? LEFT : RIGHT;
    }

    // 空いている部分にノードを追加する
    current[direction] = node;
  }

  findNodeByValue(value: number) {
    let result: BinaryTreeNode | null = null;

    let current = this.root as BinaryTreeNode;
    if (current.value === value) return current;
    let direction = value < current.value ? LEFT : RIGHT;
    while (current[direction]) {
      current = current[direction] as BinaryTreeNode;
      if (current.value === value) {
        result = current
        break;
      }
      direction = value < current.value ? LEFT : RIGHT;
    }

    return result;
  }

  // TODO: implement
  delete(value: number) {
    if (!this.root) {
      return false;
    }

    const targetNode = this.findNodeByValue(value);
    // 値が見つからない
    if (!targetNode) return false;

    this.root = null;
    return true;
  }
}

export {
  BinaryTreeNode,
  BinarySearchTree,
}
