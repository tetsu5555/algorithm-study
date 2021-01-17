class BinaryTreeNode {
  public value: any;
  public left: any;
  public right: any;
  
  constructor(value: any) {
    // そのノードの値
    this.value = value;
    
    // 左の子ノード
    this.left = null;
    // 右の子ノード
    this.right = null;
  }
}

const LEFT = 'left' as const;
const RIGHT = 'right' as const;

class BinarySearchTree {
  public root: BinaryTreeNode | null;
  
  constructor() {
    // 一番上のノード
    this.root = null;
  }

  addNode(node: BinaryTreeNode) {
    // まだrootノードがなければそれを一番上のノードとする
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    let direction = node.value < current.value ? LEFT : RIGHT;
    while (current[direction]) {
      current = current[direction];
      direction = node.value < current.value ? LEFT : RIGHT;
    }

    // 空いている部分にノードを追加する
    current[direction] = node;
  } 
}

export {
  BinaryTreeNode,
  BinarySearchTree,
}
