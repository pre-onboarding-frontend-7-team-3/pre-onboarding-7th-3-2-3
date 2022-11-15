import React from "react";
import { inputValueState } from "@src/store/search";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const SearchFilter = ({ searchFilter }: any) => {
  const [value, setValue] = useRecoilState<string>(inputValueState);
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form>
      <SearchInput value={value} onChange={handleInputValue} />
      <SubmitButton onClick={searchFilter}> 검색 </SubmitButton>
    </form>
  );
};

export default SearchFilter;

export const SearchInput = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  height: 40px;
  width: 200px;
  font-size: 15px;
  padding: 5px;
`;

export const SubmitButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 15px;
  border: 1px solid gray;
`;
