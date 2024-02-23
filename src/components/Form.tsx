import { FormEventHandler } from "react";

interface IFormProps {
  addTodoToList: FormEventHandler<HTMLFormElement>;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}

export function Form(props: IFormProps) {
  return (
    <form className="form" onSubmit={props.addTodoToList}>
      <div className="inputs">
        <input
          value={props.todo}
          onChange={(event) => props.setTodo(event.target.value)}
          className="addItem text"
          type="text"
          placeholder="+ Add Item"
        />
        <input
          value={props.author}
          onChange={(event) => props.setAuthor(event.target.value)}
          className="addItem author"
          type="text"
          placeholder="+ Author"
        />
      </div>
      <button type="submit" className="btn-primary add">
        Add
      </button>
    </form>
  );
}
