import styled from 'styled-components';

const SearchInput = ({ keyword, setKeyword }) => {
  return (
    <Input
      type="text"
      placeholder="계좌명 검색"
      value={keyword}
      onChange={e => setKeyword(e.target.value)}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  width: 180px;
  padding: 6px 10px;
  border: 1px solid grey;
`;
