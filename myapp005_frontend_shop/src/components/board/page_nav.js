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
          <span
            className='page-link'
            onClick={() => getBoardList(pv.startPage - pv.blockPage)}
          >
            &laquo;
          </span>
        </li>
        {PageNumber.map((pnum, idx) => (
          <li
            key={pnum}
            className={pv.currentPage === pnum ? 'page-item active' : null}
            aria-current={pv.currentPage === pnum ? 'page' : null}
          >
            <span className='page-link' onClick={() => getBoardList(pnum)}>
              {pnum}
            </span>
          </li>
        ))}
        <li
          className={
            pv.endPage >= pv.totalPage ? 'page-item disabled' : 'page-item'
          }
        >
          <span
            className='page-link'
            onClick={() => getBoardList(pv.startPage + pv.blockPage)}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};
export default PageNavigation;
