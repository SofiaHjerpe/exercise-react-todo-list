import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";

export function Sort() {
  const { sortTodoByAuthorOrTimestamp } = useContext(TodoContext);
  const [beforeSort, sortActive] = useState(Boolean);
  const sortOptions = (
    <span className="sortOptions">
      <a href="#" onClick={() => sortTodoByAuthorOrTimestamp("timestamp")}>timestamp</a>
      <a href="#" onClick={()=> sortTodoByAuthorOrTimestamp("author")}>author</a>
    </span>
  );

  return (
    <header className="sort-header">
      <button onClick={() => sortActive((preVal) => !preVal)} className="btn-icon">
        {beforeSort ? sortOptions : <span className="material-icons">sort</span>}
      </button>
    </header>
  );
}
