import { useState } from 'react';
import * as S from './SearchInput.style';
import useDebounce from '../hooks/useDebounce';

type Props = {
  onUpdateParams: Function;
  text: string;
};

const SearchInput = ({ onUpdateParams, text }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onUpdateParams((prev: any) => {
      return { ...prev, pageNum: 1, q: value };
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
