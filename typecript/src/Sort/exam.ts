const reversedbubbleSort = (array: number[]) => {
  let result = [...array]
  for (let i = 0; i < result.length; i++) {
    // console.log('i', i)
    // console.log('end', array.length - i)
    for (let j = 0; j < array.length; j++) {
      console.log('===end', (array.length - i) )
      // if (result[i] > result[i + 1]) {
      //   [result[i], result[i + 1]] = [result[i + 1], result[i]]
      // }
    }
  }

  return result;
}

const reversedSort = (array: number[]) => {

  
  return array;
}

export { reversedSort, reversedbubbleSort }
