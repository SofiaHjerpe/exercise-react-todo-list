import { FormEventHandler, useState } from "react";
import { Form } from "./Form";
import { ITodo } from "../interfaces";
import { TodoList } from "./TodoList";
export function AddTodo() {
  const todos: ITodo[] = [];
  const [todoItem, setTodos] = useState(todos);
  const [todo, setTodo] = useState("");
  const [author, setAuthor] = useState("");
  const [done, setDone] = useState(false);

  const deleteTodo = (id: number) => {
    setTodos(todoItem.filter((todo) => todo.id !== id));
  };
  const toggleDone = (id: number, done: boolean) => {
    setDone(done);

    console.log(done);
  };
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
      done: done,
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
      <TodoList todos={todoItem} toggleDone={toggleDone} deleteTodo={deleteTodo} />
    </div>
  );
}
