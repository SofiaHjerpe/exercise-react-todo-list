import { TodoList } from "./components/TodoList";
import {AddTodo} from "./components/AddTodo"

import "./scss/main.scss";
import { Sort } from "./components/Sort";
export function App() {
  return <>
  <Sort />
  <AddTodo />
  <TodoList />
  </>;
}
