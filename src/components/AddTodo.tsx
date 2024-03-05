import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export function AddTodo(): ReactElement {
  const { addTodoToList } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const [authorVal, setAuthorValue] = useState("");
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newItem: ITodo = {
      id: uuidv4(),
      todo: value,
      author: authorVal,
      timeStamp: new Date().toLocaleTimeString(),
      done: false,
    };
    addTodoToList(newItem);
    setValue("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputs">
          <input
            onChange={(event) => setValue(event.target.value)}
            className="addItem text"
            type="text"
            placeholder="+ Add Item"
          />
          <input
            onChange={(event) => setAuthorValue(event.target.value)}
            className="addItem author"
            type="text"
            placeholder="+ Author"
          />
        </div>
        <button type="submit" className="btn-primary add">
          Add
        </button>
      </form>
    </div>
  );
}



