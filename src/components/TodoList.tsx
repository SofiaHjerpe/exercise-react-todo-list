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
export function TodoList(props: ITodoListProps) {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          moveUp={props.moveUp}
          moveDown={props.moveDown}
          deleteTodo={props.deleteTodo}
          todoBefore={props.todoBefore}
          updateTodo={props.updateTodo}
          setEditedTodo={props.setEditedTodo}
          setEditingTodoId={props.setEditingTodoId}
          editingTodoId={props.editingTodoId}
        />
      ))}
      ;
    </div>
  );
}
