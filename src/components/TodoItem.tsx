import { ChangeEventHandler, MouseEventHandler } from "react";
import { ITodo } from "../interfaces";

interface ITodoItemProps {
  todo: ITodo;
  deleteTodo: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
}
export function TodoItem({ todo, deleteTodo, moveUp, moveDown }: ITodoItemProps) {
  const handleOnClick: MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  const handleOnClickArrowUp: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    moveUp(todo.id);
  };

  const handleOnClickArrowDown: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    moveDown(todo.id);
  };

  return (
    <article className="todo-item">
      <div className="action-icons">
        <label htmlFor="done">Done</label>
        <input type="checkbox" id="done" className="done" />
      </div>
      <div>
        <span className="text">{todo.todo}</span>
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
