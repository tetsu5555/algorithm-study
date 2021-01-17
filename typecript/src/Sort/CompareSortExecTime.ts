// @ts-ignore
const { performance } = require('perf_hooks');

import { getRandomArray } from "../util"
import { quickSort2 } from "./QuickSort/QuickSort"
import { bubbleSort } from "./BubbleSort/BubbleSort"

const array = getRandomArray(10000);
const bubbleStart = performance.now();
bubbleSort(array);
const bubbleEnd = performance.now();
const bubbleTime = bubbleEnd - bubbleStart;

const quickStart = performance.now();
quickSort2(array);
const quickEnd = performance.now();
const quickTime = quickEnd - quickStart;

// 実行結果
// Bubble Sort: 1088.4518050029874
// Quick Sort : 6.434912994503975
console.log(`Bubble Sort: ${bubbleTime}`);
console.log(`Quick Sort : ${quickTime}`);
