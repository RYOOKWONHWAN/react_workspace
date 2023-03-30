// 상태전달  : Redux + useSelector() + useDispatch()
import './App.css';

import Todo from './components/todo3';
import Input from './components/input3';
import { Provider } from 'react-redux';
import { store } from './reduxs/store';

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST (Redux)</h1>
      <Provider store={store}>
        <Input></Input>

        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
