import { Dispatch, SetStateAction } from "react";
import { ITodo } from "../interfaces";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
  setEditingTodoId: Dispatch<SetStateAction<number | null>>;
  setEditedTodo: Dispatch<React.SetStateAction<string>>;
  todoBefore: string;
  updateTodo: (id: number, newValue: string) => void;
  editingTodoId: number | null;
}
export function TodoList({ todos, editingTodoId, deleteTodo, updateTodo, todoBefore, setEditedTodo, setEditingTodoId, moveDown, moveUp }: ITodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          moveUp={moveUp}
          moveDown={moveDown}
          deleteTodo={deleteTodo}
          todoBefore={todoBefore}
          updateTodo={updateTodo}
          setEditedTodo={setEditedTodo}
          setEditingTodoId={setEditingTodoId}
          editingTodoId={editingTodoId}
        />
      ))}
      ;
    </div>
  );
}
