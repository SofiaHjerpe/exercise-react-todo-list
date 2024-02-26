import { MouseEventHandler } from "react";
import { ITodo } from "../interfaces";

interface ITodoItemProps {
  todo: ITodo;
  toggleDone: (id: number, done: boolean) => void;
  deleteTodo: (id: number) => void;
}
export function TodoItem({ todo, toggleDone, deleteTodo }: ITodoItemProps) {
  const handleOnClick: MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  const handleOnChecked: MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    let toggleVal = (todo.done = !todo.done);
    toggleDone(todo.id, toggleVal);
  };
  return (
    <article className="todo-item">
      <div className="action-icons">
        <label htmlFor="done">Done</label>
        <input type="checkbox" onClick={handleOnChecked} id="done" className="done" />
      </div>
      <div>
        <span className="text">{todo.todo}</span>
      </div>
      <div className="action-icons">
        <button id={todo.id.toString()} className="btn-icon moveUp">
          <span className="material-icons">arrow_upward</span>
        </button>
        <button id={todo.id.toString()} className="btn-icon moveDown">
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
