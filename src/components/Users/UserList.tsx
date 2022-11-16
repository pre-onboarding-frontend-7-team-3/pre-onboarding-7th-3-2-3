import { useState } from 'react';
import styled from 'styled-components';

import { Table, TableContainer, Paper } from '@mui/material';

import { USER_DROPDOWN_DATA } from '@src/constants/dropDownData';
import SearchInput from '../InvestmentAccountList/component/SearchInput';
import Dropdown from '../InvestmentAccountList/Dropdown/Dropdown';
import PagenationButton from '../InvestmentAccountList/component/PagenationButton';
import UserTableHead from './UserTableHead/UserTable';
import UserTableItem from './UserTableItem/UserTableItem';
import NewUserModal from '../NewUserModal';
import { useGetUserListQuery } from './UserList-query/UserList.query';
import { useGetFilteredUserList } from './UserList-query/UserListFilteredByKeyword.query';

const PARAMETER_KEYS = {
  // keyword: '',
  is_active: '',
  status: '',
};
const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [accountQueryParams, setAccountQueryParams] = useState({
    pageLimit: currentPage,
  });

  const {
    data: defaultUserData,
    isLoading,
    isError,
  } = useGetUserListQuery(accountQueryParams);

  // const { data: filteredUserDataByKeyword } = useGetFilteredUserList(keyword);
  
  // const maxPage = Math.floor(defaultAccountListData?.data?.length / 20) + 1;
  const maxPage = 5;

  // usePrefetchAccountList(currentPage, maxPage);

  const handleCurrentPage = (num: number) => {
    setCurrentPage(prev => prev + num);
    setAccountQueryParams(prev => {
      return {
        ...prev,
        pageLimit: currentPage + num,
      };
    });
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>error...</h3>
      </>
    );

  return (
    <>
      <Container>
        <FilterContainer>
          <SearchInput onUpdateParams={setKeyword} />
          {USER_DROPDOWN_DATA.map(({ id, name, data }) => (
            <Dropdown
              key={id}
              accountQueryParams={PARAMETER_KEYS}
              setAccountQueryParams={setAccountQueryParams}
              name={name}
              data={data}
            />
          ))}
        </FilterContainer>
        <AddNewUserButton onClick={() => setIsModalOpen(prev => !prev)}>
          신규 고객 추가
        </AddNewUserButton>
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <UserTableHead />
          <UserTableItem data={defaultUserData} />
        </Table>
      </TableContainer>
      <PagenationButton
        currentPage={currentPage}
        maxPage={maxPage}
        handleCurrentPage={handleCurrentPage}
      />
      {isModalOpen && <NewUserModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default UserList;

const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  ${({ theme }) => theme.flexDefault}
`;

const AddNewUserButton = styled.button`
  ${({ theme }) => theme.flexCenter}
  min-width: 110px;
  padding: 8px 14px;
  margin-right: 10px;
  background: #3c6dba;
  border-radius: 43px;
  color: #fff;
  box-shadow: 0px 1px 2px rgba(9, 16, 55, 0.4);
  cursor: pointer;
`;
