import { useState } from 'react';
import * as S from './SearchInput.style';
import useDebounce from '@src/hooks/useDebounce';

type Props = {
  onUpdateParams: Function;
  text: string;
};

const SearchInput = ({ onUpdateParams, text }: Props) => {
  const [value, setValue] = useState('');

  useDebounce(() => {
    onUpdateParams((prev: any) => {
      return { ...prev, pageNum: 1, q: value };
    });
  }, value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

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
