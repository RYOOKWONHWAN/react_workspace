import { useEffect } from 'react';

const LogOut = () => {
  useEffect(() => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('memberName');
    localStorage.removeItem('isLogin');
    localStorage.clear();

    window.location.replace('/');
  });
};
export default LogOut;
