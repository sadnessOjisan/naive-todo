console.log("hello world!!");

/**
 * formの送信時に実行する関数。
 * input form の入力内容を取得してそれをTODOリストに加える
 */
function handleFormSubmit() {
  const input = document.getElementById("task-input");
  const inputValue = input.value; // 厳密には instanceof で input要素であるかのチェックを入れるべき
  const todosEl = document.getElementById("todos");
  const todoEl = document.createElement("li");
  todoEl.innerText = inputValue;
  todosEl.appendChild(todoEl);
  input.value = ""; // input のリセット
}
