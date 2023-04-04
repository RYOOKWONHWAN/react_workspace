import { useSelector } from 'react-redux';

const PageNavigation = ({ getBoardList }) => {
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );
  const PageNumber = [];
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    PageNumber.push(i);
  }

  return (
    <nav aria-label='...'>
      <ul className='pagination'>
        <li className={pv.startPage <= 1 ? 'page-item disabled' : 'page-item'}>
          <a
            href='#!'
            className='page-link'
            onClick={() => getBoardList(pv.startPage - pv.blockPage)}
          >
            &laquo;
          </a>
        </li>
        {PageNumber.map((pnum, idx) => (
          <li
            className={pv.currentPage === pnum ? 'page-item active' : null}
            aria-current={pv.currentPage === pnum ? 'page' : null}
            key={pnum}
          >
            <a href='#!' onClick={() => getBoardList(pnum)}>
              <span className='page-link'>{pnum}</span>
            </a>
          </li>
        ))}
        <li
          className={
            pv.endPage >= pv.totalPage ? 'page-item disabled' : 'page-item'
          }
        >
          <a
            href='#!'
            className='page-link'
            onClick={() => getBoardList(pv.startPage + pv.blockPage)}
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default PageNavigation;
