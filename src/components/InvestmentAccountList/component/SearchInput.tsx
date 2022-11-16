import { useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../hooks/useDebounce';

const SearchInput = ({ onUpdateParams }: any) => {
  const [value, setValue] = useState('');

  // useDebounce(() => {
  //   if (value) 
  //   setAccountQueryParams((prev: any) => {
  //     return { ...prev, keyword: value };
  //   });
  // }, value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onUpdateParams((prev: any) => {
      return { ...prev, pageLimit:1, keyword: value };
    });

    setValue(value);
  };

  return (
    <Input
      type="text"
      placeholder="계좌명 검색"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  width: 180px;
  height: 38px;
  padding: 6px 10px;
  margin-right: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgb(200, 200, 200);
`;
