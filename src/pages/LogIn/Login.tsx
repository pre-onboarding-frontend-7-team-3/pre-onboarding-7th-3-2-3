import { LogInButton, LogInForm, LogInWrapper } from './LogIn.style';
import { TextField } from '@mui/material';
import Icons from '@components/common/Icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignForm from '@hooks/useSignForm';
import { investmentService } from '@apis/index';

const LogIn = () => {
  const navigate = useNavigate();
  const { userInfo, handleInputValue } = useSignForm();
  const [isError, setIsError] = useState(false);

  const handleLogInButton = async () => {
    const { data } = await investmentService.logIn(userInfo);
    console.log(data);
    if (data) {
      localStorage.setItem('token', JSON.stringify(data.accessToken));

      navigate('/dashboard');
    } else {
      setIsError(true);
    }
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
          error={isError}
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
          error={isError}
          onChange={handleInputValue('password')}
        />
        <LogInButton onClick={handleLogInButton}>로그인</LogInButton>
      </LogInForm>
    </LogInWrapper>
  );
};

export default LogIn;
