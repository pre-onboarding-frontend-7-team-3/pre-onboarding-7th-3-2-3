import { useState } from 'react';
import * as S from './SearchInput.style';
import useDebounce from '../hooks/useDebounce';

type Props = {
  onUpdateParams: Function;
  text: string;
};

const SearchInput = ({ onUpdateParams, text }: Props) => {
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
      return { ...prev, pageLimit: 1, keyword: value };
    });

    setValue(value);
  };

  return (
    <S.Input
      type="text"
      placeholder={text}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
