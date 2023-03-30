import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h2>
        <Link to='/product/1'>1 상품페이지 입니다.</Link>
      </h2>
      <h2>
        <Link to='/product/2'>2 상품페이지 입니다.</Link>
      </h2>
    </div>
  );
};
export default Product;
