import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { memberActions } from '../../redux/actions/member_action';

const EditInfo = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    memberEmail: '',
    memberName: '',
    memberPass: '',
  });

  useEffect(() => {}, []);
  const { memberEmail, memberName, memberPass } = inputs;

  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('memberEmail', localStorage.getItem('memberEmail'));
    formData.append('memberName', memberName);
    formData.append('memberPass', memberPass);
    formData.append('memberPhone', memberPass);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    await dispatch(memberActions.getMemberUpdate(formData, config));

    setInputs({
      memberEmail: '',
      memberName: '',
      memberPass: '',
    });
    localStorage.setItem('memberName', memberName);

    window.location.replace('/');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInputs({
      memberEmail: '',
      memberName: '',
      memberPass: '',
    });
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigator(-1);
  };
  return (
    <form name='frm'>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width='20%'>메일</th>
            <td>
              {' '}
              <textarea
                name='memberEmail'
                id='memberEmail'
                readOnly
                rows='1'
                cols='20'
                value={localStorage.getItem('memberEmail')}
                onChange={handleValueChange}
              ></textarea>
            </td>
          </tr>

          <tr>
            <th>이름</th>
            <td colSpan='3'>
              {' '}
              <textarea
                name='memberName'
                id='memberName'
                rows='1'
                cols='20'
                onChange={handleValueChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td colSpan='3'>
              {' '}
              <textarea
                name='memberPhone'
                id='memberPhone'
                rows='1'
                cols='20'
                onChange={handleValueChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td colSpan='3'>
              {' '}
              <textarea
                name='memberPass'
                id='memberPass'
                rows='1'
                cols='20'
                onChange={handleValueChange}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={handleUpdate}>
        수정
      </button>
      <button className='btn btn-primary' onClick={handleReset}>
        취소
      </button>
      <button className='btn btn-primary' onClick={handleBack}>
        뒤로
      </button>
    </form>
  );
};
export default EditInfo;
