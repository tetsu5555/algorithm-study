// @ts-ignore
const { performance } = require('perf_hooks');
import { LinkedList } from "./LinkedList"

function mesureTime(func: Function) {
  // 開始時間
  const startTime = performance.now();
  for (let i = 0; i < 100; i++) {
    func();
  }
  // 終了時間
  const endTime = performance.now();
  // 経過時間
  const elapsedTime = endTime - startTime;
  return elapsedTime;
}

function arrayPush() {
  const array: any[] = [];
  for (let i = 0; i < 1000; i++) {
    array.push(i)
  }
}

function arrayUnshift() {
  const array: any[] = [];
  for (let i = 0; i < 1000; i++) {
    array.unshift(i);
  }
}

function linkedListPush() {
  const list = new LinkedList();
  for (let i = 0; i < 1000; i++) {
    list.push(i)
  }
}

function linkedListUnshift() {
  const list = new LinkedList();
  for (let i = 0; i < 1000; i++) {
    list.unshift(i);
  }
}

const arrayPushTime = mesureTime(arrayPush);
const arrayUnshiftTime = mesureTime(arrayUnshift);
const linkedListPushTime = mesureTime(linkedListPush);
const linkedListUnshiftTime = mesureTime(linkedListUnshift);

// 実行結果
// > typecript@1.0.0 run /Users/tetsuo.yamamoto/Codes/algorithm-study/typecript
// > ts-node "src/LinkedListMesure.ts"

// Array.push 6.24
// Array.push 8.66
// Array.push 137.48
// Array.push 2.97
console.log(`Array.push ${arrayPushTime.toFixed(2)}`)
console.log(`Array.push ${arrayUnshiftTime.toFixed(2)}`)
console.log(`Array.push ${linkedListPushTime.toFixed(2)}`)
console.log(`Array.push ${linkedListUnshiftTime.toFixed(2)}`)
