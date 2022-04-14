const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feadback = document.getElementById("feadback")

//クイズの内容
const quiz = {
  text: "この星は何の名前でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feadback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feadback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメテ",
      feadback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

//quiz を画面に表示させる関数
const reloadQuiz = function () {
  //問題文を表示
  quizText.textContent = "Q. " + quiz.text

  //画像を表示
  quizImage.src = "./images/" + quiz.image

  //選択肢 (ボタン) を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

//choiceNumber番目の選択肢を選択
const chooce = function (choiceNumber) {
  feadback.textContent = quiz.choices[choiceNumber].feadback
}
choice1.onclick = function () {
  chooce(0)
}
choice2.onclick = function () {
  chooce(1)
}
choice3.onclick = function () {
  chooce(2)
}

//reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
