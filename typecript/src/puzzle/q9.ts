const createTwoDimensionArray = (vertical: number, horizontal: number) => {
  const result = Array.from(Array(vertical), () => new Array(horizontal))
  return result
}