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
export function TodoItem(props: ITodoItemProps) {
  const handleOnClick: MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    props.deleteTodo(props.todo.id);
  };

  const inputField = (
    <label>
      Edit todo:
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          props.setEditedTodo(e.target.value);
        }}
        onBlur={() => {
          props.updateTodo(props.todo.id, props.todoBefore);
          props.setEditingTodoId(null);
        }}
        value={props.todoBefore}
        id="edit"
        name="edit"
      />
    </label>
  );


  const handleOnClickArrowUp: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    props.moveUp(props.todo.id);
  };

  const handleOnClickArrowDown: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    props.moveDown(props.todo.id);
  };

  const handleOnEdit: MouseEventHandler<HTMLButtonElement> = () => {
    props.setEditingTodoId(props.todo.id);
  };

    const todoValue = (
      <div className="todo-container">
        <div className="text">{props.todo.todo}</div>
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
        <div>{props.editingTodoId === props.todo.id ? inputField : todoValue}</div>
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
            author:{props.todo.author} date: {props.todo.timeStamp.toString()}
          </span>
        </span>
      </div>
    </article>
  );
}
