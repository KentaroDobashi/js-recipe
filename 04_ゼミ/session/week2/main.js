const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

//追加ボタンを押した時の処理
addButton.onclick = function () {
  //メモを表示させる
  const memo = createMemo(memoInput.value)
  memoContainer.append(memo)
  console.log(memoInput.value)
  memoInput.value = ""
}

//cardを作る関数
const createMemo = function (text) {
  const memo = document.createElement("div")
  memo.textContent = text

  //cardに削除ボタンを作る
  const removeButton = document.createElement("button")
  removeButton.textContent = "削除"
  memo.append(removeButton)

  removeButton.onclick = function () {
    memo.remove()
  }
  return memo
}
