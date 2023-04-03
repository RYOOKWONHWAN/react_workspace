import './App.css';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/todo2';
import Input from './components/input2';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/ToDoContext';
import { baseUrl } from './apiurl';
import axios from 'axios';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();
    // setTodos([
    //   ...todos,
    //   { id: todos.length + 1, todoname: input, completed: 0 },
    // ]);
    await axios
      .post(baseUrl + '/todo/', { todoname: input })
      .then((Response) => {
        console.log(Response.data);
        setInput('');
        getTodos();
      });
    setInput('');
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((Response) => {
        console.log(Response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = async (id) => {
    let data = todos.filter((todo) => todo.id === id)[0].completed;

    await axios
      .put(baseUrl + '/todo/' + id + '/' + data)
      .then((Response) => {
        console.log(Response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  async function getTodos() {
    // 기본적으로 비동기 처리가 되기 때문에 동기화로 처리되게 async 추가
    await axios
      .get(`${baseUrl}/todo/all`)
      .then((Response) => {
        console.log(Response);
        console.log('1111');
        setTodos(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    inputRef.current.focus();
    console.log('useEffect');
  }, [input]);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provider
        value={{ insertTodo, input, handleChangeText, inputRef }}
      >
        <Input></Input>
      </InputContext.Provider>
      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo></Todo>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
