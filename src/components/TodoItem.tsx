import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { ITodo } from "../interfaces";

interface ITodoItemProps {
  todo: ITodo;
  deleteTodo: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
  setEditingTodoId: Dispatch<SetStateAction<number | null>>;
  setEditedTodo: Dispatch<React.SetStateAction<string>>;
  todoBefore: string;
  updateTodo: (id: number, newValue: string) => void;
  editingTodoId: number | null;
}
export function TodoItem({
  todo,
  deleteTodo,
  moveUp,
  moveDown,
  todoBefore,
  updateTodo,
  setEditingTodoId,
  setEditedTodo,
  editingTodoId,
}: ITodoItemProps) {
  const handleOnClick: MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  const inputField = (
    <label>
      Edit todo:
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setEditedTodo(e.target.value);
        }}
        onBlur={() => {
          updateTodo(todo.id, todoBefore);
          setEditingTodoId(null);
        }}
        value={todoBefore}
        id="edit"
        name="edit"
      />
    </label>
  );


  const handleOnClickArrowUp: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    moveUp(todo.id);
  };

  const handleOnClickArrowDown: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    moveDown(todo.id);
  };

  const handleOnEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditingTodoId(todo.id);
  };

    const todoValue = (
      <div className="todo-container">
        <div className="text">{todo.todo}</div>
        <button className="btn-primary small" onClick={handleOnEdit}>
          Edit
        </button>
      </div>
    );
  return (
    <article className="todo-item">
      <div className="action-icons">
        <label htmlFor="done">Done</label>
        <input type="checkbox" id="done" className="done" />
      </div>
      <div>
        <div>{editingTodoId === todo.id ? inputField : todoValue}</div>
      </div>
      <div className="action-icons">
        <button onClick={handleOnClickArrowUp} className="btn-icon moveUp">
          <span className="material-icons">arrow_upward</span>
        </button>
        <button onClick={handleOnClickArrowDown} className="btn-icon moveDown">
          <span className="material-icons">arrow_downward</span>
        </button>
        <button className="btn-icon delete">
          <span onClick={handleOnClick} className="material-icons">
            delete
          </span>
        </button>
        <span className="material-icons moreInfo">
          info
          <span className="mInfo">
            author:{todo.author} date: {todo.timeStamp.toString()}
          </span>
        </span>
      </div>
    </article>
  );
}
