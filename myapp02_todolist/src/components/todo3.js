import { useDispatch, useSelector } from 'react-redux';
import Label from './label3';

const Todo = () => {
  const todos = useSelector((todos) => todos);
  const dispatch = useDispatch();
  //   const list = useSelector((list) => list);

  return (
    <>
      {' '}
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label todo={todo}></Label>
              </div>
            );
          })
        : null}
    </>
  );
};
export default Todo;
