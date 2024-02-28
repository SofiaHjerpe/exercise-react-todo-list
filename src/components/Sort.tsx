import { Dispatch } from "react";

interface ISortProps {
  sortTodoByAuthor: () => void;
  sortTodoByTimestamp: () => void;
  setSortActive: Dispatch<React.SetStateAction<boolean>>;
  sortActive: boolean;
}

export function Sort(props: ISortProps) {
  const sortOptionsApear = () => {
    props.setSortActive((preVal) => !preVal);
  };
  const handleOnSortByTimestamp = () => {
    props.sortTodoByTimestamp();
  };
  const handleOnSortByAuthor = () => {
    props.sortTodoByAuthor();
  };

  const sortOptions = (
    <span className="sortOptions">
      <a href="#" onClick={handleOnSortByTimestamp}>
        timestamp
      </a>
      <a href="#" onClick={handleOnSortByAuthor}>
        author
      </a>
    </span>
  );

  return (
    <header className="sort-header">
      <button onClick={sortOptionsApear} className="btn-icon">
        {props.sortActive ? sortOptions : <span className="material-icons">sort</span>}
      </button>
    </header>
  );
}
