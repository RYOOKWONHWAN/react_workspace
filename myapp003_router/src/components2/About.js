import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
const About = () => {
  const { pathname, search } = useLocation();
  const { name, loc } = queryString.parse(search);
  const location = useLocation();
  return (
    <div>
      <h3>About</h3>
      <h5>pathname:{location.pathname}</h5>
      <h5>search:{location.search}</h5>
      <p>이름:{name}</p>
      <p>주소:{loc}</p>
    </div>
  );
};
export default About;
