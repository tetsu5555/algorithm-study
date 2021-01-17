const quickSort2 = (array: Array<number>) => {
  const start = 0;
  const end = array.length +1;
  
  if (array.length <= 1) return array;

  const pivot = Math.floor(array.length / 2)
  const pivotRight = array.slice(start, pivot)
  const pivotLeft = array.slice(pivot + 1, end)
  // 再起処理
  const sortTarget = [...quickSort2(pivotRight), ...quickSort2(pivotLeft)]

  const lessThanPivot: number[] = [];
  const moreThanPivot: number[] = [];
  sortTarget.forEach(item => {
    if (item < array[pivot]) lessThanPivot.push(item)
    if (item >= array[pivot]) moreThanPivot.push(item)
  })

  const sorted = [...lessThanPivot, array[pivot], ...moreThanPivot]
  
  return sorted
}

export { quickSort2 };
