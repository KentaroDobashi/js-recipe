const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

//クイズの内容
const quiz = [
  {
    text: "この星は何の名前でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメテ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "",
    image: "",
    caches: [
      {
        text: "",
        feedback: "",
      },
      {
        text: "",
        feedback: "",
      },
      {
        text: "",
        feedback: "",
      },
    ],
  },
  {
    text: "",
    image: "",
    caches: [
      {
        text: "",
        feedback: "",
      },
      {
        text: "",
        feedback: "",
      },
      {
        text: "",
        feedback: "",
      },
    ],
  },
]

let count = 1

//quiz を画面に表示させる関数
const reloadQuiz = function () {
  //問題文を表示
  quizText.textContent = "Q." + "" + quiz[0].text

  //画像を表示
  quizImage.src = "./images/" + quiz[0].image

  //選択肢 (ボタン) を表示
  choice1.textContent = quiz[0].choices[0].text
  choice2.textContent = quiz[0].choices[1].text
  choice3.textContent = quiz[0].choices[2].text
}

//choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  feedback.textContent = quiz[0].choices[choiceNumber].feedback
}
choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}

//reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

//nextQuiz を押すと次の問題を表示
nextQuizButton.onclick = function () {
  if (count < quiz.length) {
    count++
  }
  /*for (let i = 0; i < quiz.length; i++) {
    reloadQuiz(i)
  }*/
  console.log(count)
}
