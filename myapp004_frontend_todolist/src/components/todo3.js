import { useDispatch, useSelector } from 'react-redux';
import Label from './label3';
import { baseUrl } from '../apiurl';
import axios from 'axios';
import { useEffect } from 'react';
import { getAction, getTodos } from '../reduxs/action';

const Todo = () => {
  const todos = useSelector((todos) => todos);
  const dispatch = useDispatch();
  //   const list = useSelector((list) => list);
  useEffect(() => {
    getAction(dispatch);
  }, []);

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
