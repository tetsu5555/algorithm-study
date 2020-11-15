const binarySearch = (array: number[], target: number) => {
  if (array.length < 1) return array[0] === target
  
  const center = Math.floor(array.length / 2)
  const left = array.slice(0, center)
  const right = array.slice(center + 1, array.length)
  if (array[center] === target) {
    return true
  }
  if (binarySearch(left, target)) {
    return true
  }
  if (binarySearch(right, target)) {
    return true
  }
  
  return false
}

export { binarySearch };
