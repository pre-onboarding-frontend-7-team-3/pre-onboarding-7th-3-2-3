import React, { useCallback, useState } from 'react';

const useSignForm = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleInputValue = useCallback(
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo({ ...userInfo, [key]: e.target.value });
    },
    [userInfo]
  );

  return {
    userInfo,
    handleInputValue,
  };
};

export default useSignForm;
