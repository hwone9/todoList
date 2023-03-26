import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList((currentArray) => [
      { id: todoList.length + 1, todo: todo },
      ...currentArray,
    ]);
    setTodo("");
  };
  //init
  useEffect(() => {
    fetch(`${window.location.href}data/getTodoList.json`)
      .then((response) => response.json())
      .then((json) => {
        setTodoList(json);
      });
  }, []);

  console.log(todo);
  console.log(todoList);

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="write your to do..."
        />
      </form>
      {todoList.map((item) => {
        return <li key={item.id}> {item.todo} </li>;
      })}
    </div>
  );
}

export default App;