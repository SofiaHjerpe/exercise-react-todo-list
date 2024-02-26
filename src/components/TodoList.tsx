import { ITodo } from "../interfaces";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
}
export function TodoList({ todos, deleteTodo, moveDown, moveUp }: ITodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          moveUp={moveUp}
          moveDown={moveDown}
          deleteTodo={deleteTodo}
        />
      ))}
      ;
    </div>
  );
}
