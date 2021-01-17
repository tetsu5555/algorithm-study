const generateRandomNum = (min: number, max: number) => {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min
  return result;
}

const getRandomArray = (size: number, option:any = { min: 0, max: size }) => {
  const result = [...Array(size)].map(() => {
    return generateRandomNum(option.min, option.max)
  })
  return result;
}

const swap = (array: Array<number>) => {
  if (array.length <= 1) return array;
  let result = array;
  // 入れ替え
  if (array[0] > array[1]) result = [array[0], array[1]] = [array[1], array[0]];
  return result;
}

export {
  generateRandomNum,
  swap,
  getRandomArray,
}