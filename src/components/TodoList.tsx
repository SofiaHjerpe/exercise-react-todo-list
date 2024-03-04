import { ReactElement, useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../context/TodoContextProvider";

export function TodoList(): ReactElement {
  const { todoList } = useContext(TodoContext);

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
