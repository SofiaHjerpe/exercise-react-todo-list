import { MouseEventHandler, useContext } from "react";
import { ITodo } from "../interfaces";
import { TodoContext } from "../context/TodoContextProvider";

interface ITodoItemProps {
  todo: ITodo;

}

export function TodoItem({ todo}: ITodoItemProps) {
    const { deleteTodo } = useContext(TodoContext);
   const handleOnClick: MouseEventHandler<HTMLSpanElement> = (event) => {
     event.preventDefault();
     deleteTodo(todo.id);
   };

  //  const inputField = (
  //    <label>
  //      Edit todo:
  //      <input
  //       type="text"
  //        onChange={(e) => {
  //          console.log(e.target.value);
  //         props.setEditedTodo(e.target.value);
  //        }}
  //      onBlur={() => {
  //          props.updateTodo(props.todo.id, props.todoBefore);
  //          props.setEditingTodoId(null);
  //        }}
  //      value={props.todoBefore}
  //       id="edit"
  //       name="edit"
  //      />
  //    </label>
  //  );

  // const handleOnClickArrowUp: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.preventDefault();
  //   props.moveUp(props.todo.id);
  // };

  // const handleOnClickArrowDown: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.preventDefault();
  //   props.moveDown(props.todo.id);
  // };

  // const handleOnEdit: MouseEventHandler<HTMLButtonElement> = () => {
  //   props.setEditingTodoId(props.todo.id);
  // };

  // const todoValue = (
  //   <div className="todo-container">
  //     <div className="text">{props.todo.todo}</div>
  //     <button className="btn-primary small" onClick={handleOnEdit}>
  //       Edit
  //     </button>
  //   </div>
  // );

 return (
   <article className="todo-item">
     <div className="action-icons">
       <label htmlFor="done">Done</label>
       <input type="checkbox" id="done" className="done" />
     </div>

     <div>
       <div className="todo-container">
         <div className="text">{todo.todo}</div>
     
         <button className="btn-primary small" >
        Edit
         </button>
   
       </div>
       {/* <div>{props.editingTodoId === props.todo.id ? inputField : todoValue}</div> */}
     </div>

     <div className="action-icons">
       <button className="btn-icon moveUp">
         <span className="material-icons">arrow_upward</span>
       </button>

       <button className="btn-icon moveDown">
         <span className="material-icons">arrow_downward</span>
       </button>

       <button className="btn-icon delete">
         <span className="material-icons" onClick={handleOnClick}>delete</span>
       </button>

       <span className="material-icons moreInfo">
         <span className="mInfo">
           author:{todo.author} date: {todo.timeStamp.toString()}
         </span>
       </span>
     </div>
   </article>
 );
}
