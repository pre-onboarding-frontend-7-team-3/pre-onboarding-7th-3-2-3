import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import investmentService from '@src/libs/api';
import ROUTES from '@src/constants/routes';

const useAuth = () => {
  const navigate = useNavigate();
  console.log('useAuth');

  const logIn = async () => {
    try {
      await investmentService.login({
        email: 'sinkyo@gmail.com',
        password: 'test123',
      });
      navigate(ROUTES.ACCOUNTS);
    } catch (error) {
      console.log('err', error);
      navigate(ROUTES.LOGIN);
    }
  };

  useEffect(() => {
    logIn();
  }, []);

  return;
};

export default useAuth;
