const addAllNumber = function (numString) {
  const strings = numString.spilit("-")
  let result = 0
  for (i = 0; i < numString.length; i++) {
    result + Number(strings[i])
  }
  return result
}

function AreaOfTriangle(width, height) {
  let area = (width * height) / 2
  console.log(
    "底辺の高さが『" +
      width +
      "』、高さが『" +
      height +
      "』の三角形の面積は『" +
      area +
      "』です",
  )
}

AreaOfTriangle(10, 5)
