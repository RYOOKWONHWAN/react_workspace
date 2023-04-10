import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../apiurl';

// get 방식으로 유저 정보를 불러옴

const EditInfo = () => {
  const navigator = useNavigate();
  const [members, setMembers] = useState({
    memberEmail: '',
    memberPass: '',
    memberName: '',
    memberPhone: '',
  });

  const { memberName, memberPass } = members;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('Authorization'),
    },
  };

  const info = async () => {
    return await axios
      .get(
        `${baseUrl}/member/editinfo/${localStorage.getItem('memberEmail')}`,
        config
      )
      .then((response) => setMembers({ ...response.data, memberPass: '' }));
  };

  useEffect(() => {
    info();
  }, []);

  const [passwordCheck, setPasswordCheck] = useState('');

  const passChange = (e) => {
    e.preventDefault();
    if (memberPass !== e.target.value) {
      setPasswordCheck('비밀번호 불일치');
    } else {
      setPasswordCheck('비밀번호 일치');
    }
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setMembers({ ...members, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!memberPass) {
      alert('비밀번호를 입력하세요');
      return;
    }
    await axios
      // post 방식으로 전송 (URL, 데이터, 폼 type)
      .post(`${baseUrl}/member/update`, members, config);
    localStorage.setItem('memberName', memberName);
    window.location.replace('/');
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <h1>정보수정</h1>
          <div className='form-group mb-1'>
            <input
              type='email'
              className='form-control'
              name='memberEmail'
              placeholder='이메일'
              value={localStorage.memberEmail} // 로컬 스토리지의 멤버 이메일
              readOnly
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              placeholder='비밀번호'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass2'
              placeholder='비밀번호확인'
              onChange={passChange}
            />
            <span>{passwordCheck}</span>
          </div>
          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberName'
              placeholder='이름'
              value={members.memberName}
              onChange={handleValueChange}
            />
          </div>

          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberPhone'
              placeholder='연락처'
              value={members.memberPhone}
              onChange={handleValueChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            회원정보 수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInfo;
