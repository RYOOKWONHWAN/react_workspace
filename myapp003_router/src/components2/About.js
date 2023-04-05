import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
/*
  hash- 주소의 #문자열 뒤의 값
  pathname - 현재 주소 경로
  search - ?를 포함한 쿼리스트링
  state - 페이지로 이동시 임의로 넣을 수 있는 상태 값
  key - location 객체의 고유 값 , 초기값은 default , 페이지가 변경될때 마다 고유의 값이 생성됨 .
*/
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
