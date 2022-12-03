import { useState } from 'react';
import styled from 'styled-components';

import {
  useUserDetail,
  useEditUserName,
} from '@src/shared/User-query/User.query';

import Loader from '../common/Loader/Loader';
import InvestmentAccountItem from '../InvestmentAccountList/InvestmentAccountItem/InvestmentAccountItem';
import UserInfoTable from './UserInfoTable';
import { TableContainer, Table, Paper } from '@mui/material';
import CustomTableHead from '../common/Table/CustomTableHead';
import { USER_DETAL_ACCOUNT_LIST_TABLE_CELL_DATA } from '@src/constants/tableData';

type Props = {
  id: string;
};

const UserDetail = ({ id }: Props) => {
  const results = useUserDetail(id);
  const isLoading = results.some(result => result.isLoading);

  const [detailResult, accountsResult, settingResult] = results;

  const detail = detailResult.data?.data;
  const accounts = accountsResult.data;
  const setting = settingResult.data?.data;

  const [isEditing, setIsEditing] =
    useState<React.SetStateAction<boolean>>(false);
  const [inputState, setInputState] = useState<React.SetStateAction<string>>(
    detail?.name
  );

  const clickEdit = () => {
    setIsEditing(!isEditing);
  };

  const clickCompleteEdit = () => {
    onSaveUsedData();
    setIsEditing(!isEditing);
  };

  const saveUsedData = useEditUserName(id, { name: inputState });
  const onSaveUsedData = () => {
    saveUsedData.mutate();
  };

  if (isLoading) return <Loader />;
  return (
    <Wrapper>
      <Title>사용자 정보</Title>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {detail && (
            <UserInfoTable
              detail={detail}
              setting={setting}
              isEditing={isEditing}
              setInputState={setInputState}
            />
          )}
        </Table>
      </TableContainer>

      <EditButton onClick={isEditing ? clickCompleteEdit : clickEdit}>
        {isEditing ? '완료' : '수정'}
      </EditButton>

      <Title>{`증권 계좌 목록 (${accounts?.data.length}건)`}</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CustomTableHead data={USER_DETAL_ACCOUNT_LIST_TABLE_CELL_DATA} />
          <InvestmentAccountItem data={accounts} />
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default UserDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Title = styled.span`
  margin: 20px 0 10px 0;
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

const EditButton = styled.button`
  width: 60px;
  height: 32px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
`;
