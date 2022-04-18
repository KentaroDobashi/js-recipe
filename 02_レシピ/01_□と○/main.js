const figure = document.getElementById("figure")

//今の図形の状態を覚える、図形の状態に応じて図形を変化
figure.onclick = function () {
  const isRounded = figure.classList.contains("rounded")
  const isTtiangle = figure.classList.contains("triangle")
  const isSquare = !isRounded && !isTtiangle
  // roundedもtriangleも含んでいない場合は □

  //状態の変化 □ → 〇
  if (isSquare) {
    figure.classList.add("rounded")
  }

  //状態の変化 〇 → △
  if (isRounded) {
    figure.classList.remove("rounded", "square")
    figure.classList.add("triangle")
  }

  //状態の変化 △ → □
  if (isTtiangle) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
// キーボードが押されたときに図形が変化
document.onkeydown = function () {
  figure.classList.toggle("rounded")
}
