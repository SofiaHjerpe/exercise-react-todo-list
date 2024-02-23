import { FormEventHandler, useState } from "react";
import { Form } from "./Form";
import { ITodo } from "../interfaces";
import { TodoList } from "./TodoList";
export function AddTodo() {
  const todos: ITodo[] = [];
  const [todoItem, setTodos] = useState(todos);
  const [todo, setTodo] = useState("");
  const [author, setAuthor] = useState("");

  const addTodoToList: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("saved");
    console.log(todo);
    console.log(author);

    const newTodoItem = {
      id: todoItem.length,
      todo: todo,
      author: author,
      timeStamp: new Date(),
      done: false,
    };
    console.log(newTodoItem);
    setTodos([...todoItem, newTodoItem]);
    todos.push(newTodoItem);
  };
  return (
    <div>
      <Form
        addTodoToList={addTodoToList}
        todo={todo}
        setTodo={setTodo}
        author={author}
        setAuthor={setAuthor}
      />
      <TodoList todos={todoItem}/>
    </div>
  );
}
