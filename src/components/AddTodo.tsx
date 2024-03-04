
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

  
  // const addTodoToList: FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   console.log("saved");
  //   console.log(todo);
  //   console.log(author);

  //   const newTodoItem = {
  //     id: todoItem.length,
  //     todo: todo,
  //     author: author,
  //     timeStamp: new Date().toLocaleTimeString(),
  //     done: false,
  //   };
  //   console.log(newTodoItem);
  //   setTodos([...todoItem, newTodoItem]);
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
