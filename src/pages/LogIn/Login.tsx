import {
  LogInButton,
  LogInForm,
  LogInInput,
  LogInWrapper,
} from './LogIn.style';
import { TextField, InputAdornment } from '@mui/material';
import Icons from '@components/common/Icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignForm from '@hooks/useSignForm';
import { investmentService } from '@apis/index';

const LogIn = () => {
  const navigate = useNavigate();
  const { userInfo, handleInputValue } = useSignForm();

  const handleLogInButton = async () => {
    const token = await investmentService.logIn(userInfo);
    console.log(token);

    // localStorage.setItem('token');
    // navigate('/dashboard');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, []);
  return (
    <LogInWrapper>
      <LogInForm onClick={e => e.preventDefault()}>
        <TextField
          variant="outlined"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <Icons.User width="1.5rem" height="1.5rem" marginRight="1rem" />
            ),
          }}
          placeholder="이메일을 입력해주세요"
          fullWidth
          margin="normal"
          onChange={handleInputValue('email')}
        />
        <TextField
          variant="outlined"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <Icons.Lock width="1.5rem" height="1.5rem" marginRight="1rem" />
            ),
          }}
          placeholder="비밀번호를 입력해주세요"
          fullWidth
          margin="normal"
          onChange={handleInputValue('password')}
        />
        <LogInButton onClick={handleLogInButton}>로그인</LogInButton>
      </LogInForm>
    </LogInWrapper>
  );
};

export default LogIn;
