import styled from 'styled-components';

const SearchInput = ({ accountQueryParams, setAccountQueryParams }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    setAccountQueryParams(prev => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Input
      type="text"
      placeholder="계좌명 검색"
      name="keyword"
      value={accountQueryParams['keyword']}
      onChange={handleChange}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  width: 180px;
  height: 38px;
  padding: 6px 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgb(200, 200, 200);
`;
