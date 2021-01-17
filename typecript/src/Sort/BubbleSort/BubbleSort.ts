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
  let target = [...array];
  const result = target.reduce((accumulator) => sortBiggestToLast(accumulator), target)

  return result;
}

export { bubbleSort }
