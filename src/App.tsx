import { TodoList } from "./components/TodoList";
import {AddTodo} from "./components/AddTodo"

import "./scss/main.scss";
export function App() {
  return <>
  <AddTodo />
  <TodoList />
  </>;
}
