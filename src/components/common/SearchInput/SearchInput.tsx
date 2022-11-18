import { useState } from 'react';
import * as S from './SearchInput.style';
import useDebounce from '@src/hooks/useDebounce';

type Props = {
  accountQueryParams?: {
    broker_id?: string;
    is_active?: string;
    status?: string;
    pageNum?: number;
    q?: string;
  };
  onUpdateParams: Function;
  text: string;
};

const SearchInput = ({
  accountQueryParams: { q = '' } = {},
  onUpdateParams,
  text,
}: Props) => {
  const [value, setValue] = useState(q);

  useDebounce(() => {
    onUpdateParams((prev: any) => {
      return { ...prev, q: value };
    });
  }, value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // onUpdateParams((prev: any) => {
    //   return { ...prev, q: value };
    // });
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
