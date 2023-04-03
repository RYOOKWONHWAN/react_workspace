import './App.css';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/todo1';
import Input from './components/input1';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // let boardList = [
  //   { id: 1, todoname: '운동하기', completed: 0 },
  //   { id: 2, todoname: 'SNS꾸미기', completed: 0 },
  //   { id: 3, todoname: '사진정리하기', completed: 0 },
  // ];

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
      <Input
        insertTodo={insertTodo}
        input={input}
        handleChangeText={handleChangeText}
        inputRef={inputRef}
      ></Input>
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      ></Todo>
    </div>
  );
}

export default App;
