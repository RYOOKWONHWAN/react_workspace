import { Route, Routes } from 'react-router-dom';
import Home from './components2/Home';
import About from './components2/About';
import Dashboard from './components2/Dashboard';
import Layout from './components2/Layout';
import NoMatch from './components2/NoMatch';
import Product from './components2/Product';
import Detail from './components2/Detail';
const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='product/:productId' element={<Detail />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
