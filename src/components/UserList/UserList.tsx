import { useMemo, useState } from 'react';
import * as S from './UserList.style';

import { Table, TableContainer, Paper } from '@mui/material';

import { USER_DROPDOWN_DATA } from '@src/constants/dropDownData';
import SearchInput from '../common/SearchInput/SearchInput';
import Dropdown from '../common/Dropdown/Dropdown';
import PagenationButton from '../InvestmentAccountList/PagenationButton/PagenationButton';
import { useGetUserListQuery } from './UserList-query/UserList.query';
import CustomTableBody from '../common/Table/CustomTableBody';
import { GENDER, USER_TABLE_CELL_DATA } from '@src/constants/tableData';
import CustomTableHead from '../common/Table/CustomTableHead';
import { formatBoolean } from '@src/utils/formatBoolean';

import NewUserModal from '../NewUserModal';

const PARAMETER_KEYS = {
  keyword: '',
  is_active: '',
  status: '',
};
const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountQueryParams, setAccountQueryParams] = useState({
    pageLimit: currentPage,
  });
  const maxPage = 5;

  const { data, isLoading, isError } = useGetUserListQuery(accountQueryParams);

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
  const userData = useMemo(
    () =>
      data?.data?.map((data: any) => ({
        name: data.name,
        account_count: '계좌수',
        email: data.email,
        gender_origin: GENDER[data.gender_origin],
        birth_date: data.birth_date?.split('').slice(0, 10),
        phone_number: data.phone_number,
        last_login: data.last_login?.split('').slice(0, 10),
        allow_marketing_push: formatBoolean(
          data?.userSetting[0]?.allow_invest_push
        ),
        is_active: formatBoolean(data.userSetting[0]?.is_active),
        created_at: data.created_at?.split('').slice(0, 10),
        id: data.id,
        uuid: data.uuid,
      })),
    [data]
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>error...</h3>
      </>
    );

  return (
    <>
      <S.Container>
        <S.FilterContainer>
          <SearchInput onUpdateParams={setAccountQueryParams} />
          {USER_DROPDOWN_DATA.map(({ id, name, data }) => (
            <Dropdown
              key={id}
              accountQueryParams={PARAMETER_KEYS}
              setAccountQueryParams={setAccountQueryParams}
              name={name}
              data={data}
            />
          ))}
        </S.FilterContainer>
        <S.AddNewUserButton onClick={() => setIsModalOpen(prev => !prev)}>
          신규 고객 추가
        </S.AddNewUserButton>
      </S.Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CustomTableHead data={USER_TABLE_CELL_DATA} />
          <CustomTableBody data={userData} />
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
