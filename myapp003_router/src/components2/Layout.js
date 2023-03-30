import { NavLink, Outlet } from 'react-router-dom';
const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? 'green' : '',
    fontSize: isActive ? '2rem' : '',
  };
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            {/* a는 전체요소 랜더링, link 나 navlink 는 아님*/}
            {/* <a href='/about'>about</a> */}
            <NavLink to='/about?name=홍길동&loc=서울' style={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' style={activeStyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/product' style={activeStyle}>
              Product
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr></hr>
      <Outlet />
    </div>
  );
};
export default Layout;
