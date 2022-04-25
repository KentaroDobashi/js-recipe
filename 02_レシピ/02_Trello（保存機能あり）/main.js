const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addbutton = document.getElementById("add-button")

// 追加ボタンを押したときの処理を登録
addbutton.onclick = function () {
  // カードを作成する
  const card = createCard(inputElement.value)
  // card を container の中に追加する
  container.append(card)

  // 入力欄をからにする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキスト部分を表示させる
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }

  // 削除ボタンをcardに追加
  card.append(deleteButton)

  //return card
}
