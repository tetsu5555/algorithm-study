const getSequencialArray = (size: number) => {
  return [...Array(size + 1).keys()].slice(1)
}

const corrazo = (first) => {
  const edited = (first * 3) + 1
  let num = edited
  while (num !== 1) {
    // 値を変更
    num = (num % 2 === 0)
      ? num / 2
      : (num * 3) + 1

    // 判定
    if (num === first) {
      return true
    }
  }
  return false
}

const main = () => {
  // 2から始める
  const array = getSequencialArray(10000).slice(1)
  const result = array.map(item => {
    return corrazo(item)
  }).filter(Boolean).length

  return result
}

console.log('result', main())
