import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export function AddTodo(): ReactElement {
    const {addTodoToList} = useContext(TodoContext)
  const [value, setValue] = useState("");
 const [authorVal, setAuthorValue] = useState("");
  const  handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault(); 
    const newItem: ITodo = {
        id: uuidv4(), 
        todo: value, 
        author: authorVal,
        timeStamp: new Date().toLocaleTimeString(),
        done: false
    }
    addTodoToList(newItem)
  }


  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputs">
          <input
            onChange={ (event) => setValue(event.target.value)}
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
// const moveUp = (id: number) => {
//   setTodos((preVal) => {
//     const index = preVal.findIndex((todo) => todo.id === id);

//     const copy = [...preVal];

//     if (index > 0) {
//       const temp = copy[index];
//       copy[index] = copy[index - 1];
//       copy[index - 1] = temp;
//     }
//     return copy;
//   });
// };

// const moveDown = (id: number) => {
//   setTodos((preVal) => {
//     const index = preVal.findIndex((todo) => todo.id === id);

//     const copy = [...preVal];

//     if (index < todoItem.length - 1) {
//       const temp = copy[index];
//       copy[index] = copy[index + 1];
//       copy[index + 1] = temp;
//     }
//     return copy;
//   });
// };

// const updateTodo = (id: number, newValue: string) => {
//   setTodos(todoItem.map((todo) => (todo.id === id ? { ...todo, todo: newValue } : todo)));
// };

// const sortTodoByAuthor = () => {
//   setTodos((preVal) => {
//     return [...preVal].sort((a, b) => {
//       if (a.author < b.author) {
//         return -1;
//       }
//       if (a.author > b.author) {
//         return 1;
//       }
//       // Authors are the same, sort by timeStamp
//       return a.timeStamp < b.timeStamp ? -1 : 1;
//     });
//   });
// };

// const sortTodoByTimestamp = () => {
//   setTodos((preVal) => {
//     return [...preVal].sort((a, b) => {
//       if (a.timeStamp < b.timeStamp) {
//         return -1;
//       }
//       if (a.timeStamp > b.timeStamp) {
//         return 1;
//       }
//       // Timestamp are the same, sort by author
//       return a.author < b.author ? -1 : 1;
//     });
//   });
// };
