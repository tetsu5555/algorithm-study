import { BinarySearchTree, BinaryTreeNode } from "./BinarySearchTree";
import { generateRandomNum } from "../../util";

const dataNum = 1000 * 1000;
const array: number[] = [];
const tree = new BinarySearchTree();
const searchTargetValue = 2;

// データを用意する
for (let i = 0; i < dataNum; i++) {
  const value = generateRandomNum(0, dataNum)
  array.push(value);
  tree.addNode(new BinaryTreeNode(value));
}

let arraySteps = 0;
let treeSteps = 0;

// 配列
for(let i = 0; i < dataNum; i++) {
  arraySteps++;
  if(array[i] === searchTargetValue) {
    break; // もし値が見つかったら抜ける
  }
}

// 二分探索木
let current = tree.root;
while (current) {
  treeSteps++;
  if (current.value === searchTargetValue) {
    break;
  }

  current = searchTargetValue < current.value
    ? current.left
    : current.right;
}

// 実行結果
// 配列の探索には 1000000 ステップかかりました
// 二分探索木の探索には 14 ステップかかりました
console.log(`配列の探索には ${arraySteps} ステップかかりました`);
console.log(`二分探索木の探索には ${treeSteps} ステップかかりました!!`);
