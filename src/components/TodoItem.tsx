import { MouseEventHandler, useContext, useState } from "react";
import { ITodo } from "../interfaces";
import { TodoContext } from "../context/TodoContextProvider";

interface ITodoItemProps {
  todo: ITodo;
}

export function TodoItem({ todo }: ITodoItemProps) {
  const [todoBefore, editValue] = useState("");
  const [beforeEdit, editActive] = useState(Boolean);
  const { deleteTodo, moveUp, moveDown, updateTodo } = useContext(TodoContext);
  const handleOnClick: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  const handleOnMoveUpClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    moveUp(todo.id);
  };

  const handleOnMoveDownClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    moveDown(todo.id);
  };

  const inputField = (
    <label>
      Edit todo:
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          editValue(e.target.value);
        }}
        onBlur={() => {
          updateTodo(todo.id, todoBefore);
          editActive(false);
        }}
        value={todoBefore}
        id="edit"
        name="edit"
      />
    </label>
  );

  const todoValue = (
    <div className="todo-container">
      <div className="text">{todo.todo}</div>
      <button className="btn-primary small" onClick={() => editActive(true)}>
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

      <div>{beforeEdit ? inputField : todoValue}</div>

      <div className="action-icons">
        <button className="btn-icon moveUp" onClick={handleOnMoveUpClick}>
          <span className="material-icons">arrow_upward</span>
        </button>

        <button className="btn-icon moveDown" onClick={handleOnMoveDownClick}>
          <span className="material-icons">arrow_downward</span>
        </button>

        <button className="btn-icon delete">
          <span className="material-icons" onClick={handleOnClick}>
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
