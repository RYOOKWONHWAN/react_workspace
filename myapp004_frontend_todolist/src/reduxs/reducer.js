export const reducer = (todos, action) => {
  switch (action.type) {
    // case 'INSERT': //추가
    //   return [
    //     ...todos,
    //     { id: todos.length + 1, todoname: action.todoname, completed: 0 },
    //   ];
    // case 'DELETE':
    //   return todos.filter((todo) => todo.id !== action.id);
    // case 'UPDATE':
    //   return todos.map((todo) =>
    //     todo.id === action.id
    //       ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
    //       : todo
    //   );
    case 'LIST':
      return (todos = action.todos);
    default: // 목록
      return null;
  }
};
