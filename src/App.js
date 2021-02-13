import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleTodoInput = (e) => {
    setNewTodo(e.currentTarget.value);
  };
  const addTodo = () => {
    if (newTodo.length === 0) {
      return;
    }

    setTodoList([...todoList, { todo: newTodo, isDone: false }]);
    setNewTodo("");
  };
  const updateTodo = (index) => {
    todoList[index].isDone = !todoList[index].isDone;
    setTodoList([...todoList]);
    console.log(todoList);
  };
  const clearDones = () => {
    setTodoList(todoList.filter((todoItem) => !todoItem.isDone));
  };

  return (
    <div className="App">
      <input
        value={newTodo}
        onChange={handleTodoInput}
        placeholder={"Add new item..."}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearDones}>Clear Completed Tasks</button>
      <div className="todo-list">
        {todoList.map((todoItem, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => updateTodo(index)}
              checked={todoItem.isDone}
            ></input>
            <label
              onClick={() => updateTodo(index)}
              style={{
                textDecoration: todoItem.isDone ? "line-through" : "",
                color: todoItem.isDone ? "gray" : "",
              }}
            >
              {todoItem.todo}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
