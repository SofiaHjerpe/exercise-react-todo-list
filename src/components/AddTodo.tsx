import { FormEventHandler, useState } from "react";
import { Form } from "./Form";
import { ITodo } from "../interfaces";

import { TodoList } from "./TodoList";
export function AddTodo() {
  const todos: ITodo[] = [];
  const [todoItem, setTodos] = useState(todos);
  const [todo, setTodo] = useState("");
  const [todoBefore, setEditedTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [author, setAuthor] = useState("");
  const [sort, setSort] = useState("");

  const moveUp = (id: number) => {
    setTodos((preVal) => {
      const index = preVal.findIndex((todo) => todo.id === id);

      const copy = [...preVal];

      if (index > 0) {
        const temp = copy[index];
        copy[index] = copy[index - 1];
        copy[index - 1] = temp;
      }
      return copy;
    });
  };

  const moveDown = (id: number) => {
    setTodos((preVal) => {
      const index = preVal.findIndex((todo) => todo.id === id);

      const copy = [...preVal];

      if (index < todoItem.length - 1) {
        const temp = copy[index];
        copy[index] = copy[index + 1];
        copy[index + 1] = temp;
      }
      return copy;
    });
  };

  const updateTodo = (id: number, newValue: string) => {
    setTodos(todoItem.map((todo) => (todo.id === id ? { ...todo, todo: newValue } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todoItem.filter((todo) => todo.id !== id));
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
      timeStamp: new Date().toLocaleTimeString(),
      done: false,
    };
    console.log(newTodoItem);
    setTodos([...todoItem, newTodoItem]);
  };


const sortTodoByAuthor = () => {
  setTodos((preVal) => {
    return [...preVal].sort((a, b) => {
      if (a.author < b.author) {
        return -1;
      }
      if (a.author > b.author) {
        return 1;
      }
      // Authors are the same, sort by timeStamp
      return a.timeStamp < b.timeStamp ? -1 : 1;
    });
  });
};

const sortTodoByTimestamp = () => {
  setTodos((preVal) => {
    return [...preVal].sort((a, b) => {
      if (a.timeStamp < b.timeStamp) {
        return -1;
      }
      if (a.timeStamp > b.timeStamp) {
        return 1;
      }
      // Timestamp are the same, sort by author
      return a.author < b.author ? -1 : 1;
    });
  });
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
      <TodoList
        todos={todoItem}
        moveUp={moveUp}
        moveDown={moveDown}
        todoBefore={todoBefore}
        setEditedTodo={setEditedTodo}
        updateTodo={updateTodo}
        setEditingTodoId={setEditingTodoId}
        deleteTodo={deleteTodo}
        editingTodoId={editingTodoId}
      />
    </div>
  );
}
