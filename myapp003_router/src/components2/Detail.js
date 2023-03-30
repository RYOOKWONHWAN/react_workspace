import { useNavigate, useParams } from 'react-router-dom';
// [1] useParam()
// https://localhost:3000/product/1
// useParam을 사용해서 파라미터 값 받음

/*
    [2] useNavigate()
    Link 컴포넌트를 사용하지않고 다른 페이지로 이동해야하는 경우
    이전 / 다음 등에 사용되는 hook이다

    replace 옵션을 사용하면 페이지를 이동할 때 히스토리를 남기지 않는다.
    기본은 replace:false 이므로 히스토리를 남긴다.
     <button onClick={() => navigate('/',{replace:true})}>List</button>
*/
const Detail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>상품 상세 페이지</h2>
      <p>{productId} 번 상세 페이지</p>
      <ul>
        <li>
          <button onClick={() => navigate(-1)}>List</button>
        </li>
      </ul>
    </div>
  );
};
export default Detail;
