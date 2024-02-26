import { ITodo } from "../interfaces";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  toggleDone: (id: number,done: boolean) => void;
  deleteTodo: (id: number) => void;
}
export function TodoList({ todos, toggleDone, deleteTodo }: ITodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
      ))}
      ;
    </div>
  );
}
