const figure = document.getElementById("figure")

figure.onclick = function () {
  figure.classList.toggle("rounded")
}

// キーボードが押されたときに図形が変化
document.onkeydown = function () {
  figure.classList.toggle("rounded")
}

const figures = []

figure.onclick
