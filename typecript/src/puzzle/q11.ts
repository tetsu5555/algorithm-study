const getFibonacci = (order) => {
  if (order === 1) return 1
  if (order === 2) return 1
  return getFibonacci(order - 2) + getFibonacci(order - 1)
}

const fibonaccis = [1, 1, 2, 3, 5, 8, 13, 21]
fibonaccis.forEach((item, index) => {
  const order = index + 1
  const res = getFibonacci(order)
  console.log(`res${order} is ${item}`, res === item)
})
