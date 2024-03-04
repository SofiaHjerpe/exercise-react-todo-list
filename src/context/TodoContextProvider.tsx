import { createContext, ReactElement, useState } from "react";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

interface IContext {
  todoList: ITodo[];
  deleteTodo: (todoId: string) => void;
  addTodoToList: (newItem: ITodo) => void;
  moveUp: (todoId: string) => void;
  moveDown: (todoId: string) => void;
}

interface ITodoContextProviderProps {
  children: ReactElement;
}

export const TodoContext = createContext({} as IContext);

export function TodoContextProvider({ children }: ITodoContextProviderProps): ReactElement {
  const [todoList, setTodoList] = useState<ITodo[]>([
    {
      id: uuidv4(),
      todo: "send product",
      author: "Sofia",
      timeStamp: "2024-03-04 14:39",
      done: false,
    },
    {
      id: uuidv4(),
      todo: "get product",
      author: "Sofia",
      timeStamp: "2024-03-04 14:44",
      done: false,
    },
  ]);

  const addTodoToList = (newItem: ITodo): void => {
    const updatedTodoList = [newItem, ...todoList];
    setTodoList(updatedTodoList);
  };
  const deleteTodo = (todoId: string): void => {
    const updatedArray = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedArray);
  };
  const moveUp = (todoId: string) => {
    setTodoList((preVal) => {
      const index = preVal.findIndex((todo) => todo.id === todoId);

      const copy = [...preVal];

      if (index > 0) {
        const temp = copy[index];
        copy[index] = copy[index - 1];
        copy[index - 1] = temp;
      }
      return copy;
    });
  };

   const moveDown = (todoId: string) => {
    setTodoList((preVal) => {
  const index = preVal.findIndex((todo) => todo.id === todoId);

     const copy = [...preVal];

      if (index < todoList.length - 1) {
       const temp = copy[index];
        copy[index] = copy[index + 1];
        copy[index + 1] = temp;
      }
       return copy;
     });
};

  const values: IContext = {
    deleteTodo,
    todoList,
    addTodoToList,
    moveUp,
    moveDown
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
