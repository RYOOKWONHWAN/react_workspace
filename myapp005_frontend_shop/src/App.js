import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import Home from './components/home';
import BoardList from './components/board/board_list';
function App() {
  return (
    <div className='container'>
      <h1>My shop</h1>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='/board/list/:currentPage' element={<BoardList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
