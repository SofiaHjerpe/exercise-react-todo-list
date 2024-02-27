import { Dispatch, MouseEventHandler, CSSProperties } from "react";

interface ISortProps {
  sortTodos: (sortVal: string) => void;
  sort: string;
  setSort: Dispatch<React.SetStateAction<string>>;
}

export function Sort({ sortTodos }: ISortProps) {
  const handleOnChosenAuthorOrTimestamp: MouseEventHandler<HTMLAnchorElement> | undefined = (
    event
  ) => {
    let getName = event.target.toString();
    let result = getName.replace("http://localhost:5173/#", "");
    sortTodos(result);
  };

  const handleOnSort: MouseEventHandler<HTMLButtonElement> = (event) => {
    let options = document.getElementById("sort-options");
    options?.classList.remove("options");
  };
  return (
    <header className="sort-header">
      <button className="btn-icon" onClick={handleOnSort}>
        <span className="material-icons">sort</span>
      </button>
      <div id="sort-options" className="options">
        Chose element to Sort by:
        <a id="author" href="#author" onClick={handleOnChosenAuthorOrTimestamp}>
          Author
        </a>
        <a id="timestamp" href="#timestamp" onClick={handleOnChosenAuthorOrTimestamp}>
          Timestamp
        </a>
      </div>
    </header>
  );
}
