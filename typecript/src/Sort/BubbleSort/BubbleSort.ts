const sortBiggestToLast = (array: Array<number>) => {
  const result = [...array]
  for(let i = 0; i < result.length - 1; i++) {
    if(result[i] > result[i+1]) {
      [result[i], result[i+1]] = [result[i+1], result[i]];
    }
  }

  return result
}

const bubbleSort = (array: Array<number>) => {
  let result = [...array];
  const n = result.length - 1;
  for(let end = n; end > 0; end--) {
    result = sortBiggestToLast(result);
  }

  return result;
}

const array = [7, 5, 10, 3, 4];
const sorted = bubbleSort(array);
console.log(sorted); // [3, 4, 5, 7, 10]

export {
  bubbleSort
};
