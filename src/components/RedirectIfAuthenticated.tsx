import { useEffect } from 'react';
import Cookies from 'js-cookie';

const RedirectIfAuthenticated = () => {
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // if we have a cookie, display this page :
      window.location.href = '/test';
    }
  }, []);

  return null; 
};

export default RedirectIfAuthenticated;
