const addAllNumber = function (numString) {
  const strings = numString.spilit("-")
  let result = 0
  for (i = 0; i < numString.length; i++) {
    result + Number(strings[i])
  }
  return result
}
