import { ITodo } from "../interfaces";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
}
export function TodoList({ todos }: ITodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      ;
    </div>
  );
}
