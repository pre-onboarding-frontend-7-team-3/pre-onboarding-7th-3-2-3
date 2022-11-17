import { useMemo, useState } from "react";
import * as S from "./UserList.style";
import { useAtom } from "jotai";

import { Table, TableContainer, Paper } from "@mui/material";

import SearchInput from "../common/SearchInput/SearchInput";
import PagenationButton from "../InvestmentAccountList/PagenationButton/PagenationButton";
import {
  useDeleteUsers,
  useGetUserListQuery,
  usePrefetchUserListQuery,
} from "./UserList-query/UserList.query";
import CustomTableBody from "../common/Table/CustomTableBody";
import { GENDER, USER_TABLE_CELL_DATA } from "@src/constants/tableData";
import CustomTableHead from "../common/Table/CustomTableHead";
import { formatBoolean } from "@src/utils/formatBoolean";
import { maskingPhoneNumber, maskingUserName } from "@src/utils/processData";

import NewUserModal from "../NewUserModal";
import { userQueryParamsAtom } from "./atoms";

import Loader from "../common/Loader/Loader";

const UserList = () => {
  const [userQueryParams, setUserQueryParams] = useAtom(userQueryParamsAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [checked, setChecked] = useState<string[]>([]);

  const { data, isLoading, isError } = useGetUserListQuery(userQueryParams);
  const isMaxPage = usePrefetchUserListQuery(userQueryParams).data?.data.length;
  const { mutate: deleteUser } = useDeleteUsers();
  // usePrefetchAccountList(currentPage, maxPage);

  const handleCheck = (userId: string) => {
    checked.includes(userId)
      ? setChecked(checked.filter((el) => el !== userId))
      : setChecked([...checked, userId]);
  };

  const handleClick = () => {
    //await Promise.all(checked.map((userId) => mutate(userId)));
    deleteUser(checked);
    setChecked([]);
  };

  const handleCurrentPage = (num: number) => {
    setUserQueryParams((prev) => {
      return {
        ...prev,
        pageNum: num,
      };
    });
  };

  const userData = useMemo(
    () =>
      data?.data?.map((data: Record<string, any>) => ({
        name: maskingUserName(data.name),
        account_count: Math.floor(Math.random() * 10),
        email: data.email,
        gender_origin: GENDER[data.gender_origin],
        birth_date: data?.birth_date?.split("").slice(0, 10),
        phone_number: maskingPhoneNumber(data.phone_number),
        last_login: data?.last_login?.split("").slice(0, 10),
        allow_marketing_push: formatBoolean(
          data?.userSetting[0]?.allow_invest_push
        ),
        is_active: formatBoolean(data.userSetting[0]?.is_active),
        created_at: data?.created_at?.split("").slice(0, 10),
        id: data.id,
        uuid: data.uuid,
      })),
    [data]
  );

  if (isLoading) return <Loader />;
  if (isError) return <h3>error...</h3>;

  return (
    <>
      <S.Container>
        <S.FilterContainer>
          <SearchInput onUpdateParams={setUserQueryParams} text="고객명 검색" />
        </S.FilterContainer>
        <S.ButtonContainer>
          <S.Button onClick={handleClick}>삭제</S.Button>
          <S.Button onClick={() => setIsModalOpen((prev) => !prev)}>
            신규 고객 추가
          </S.Button>
        </S.ButtonContainer>
      </S.Container>
      <TableContainer component={Paper} sx={S.customTableStyle.container}>
        <Table sx={S.customTableStyle.table} aria-label="simple table">
          <CustomTableHead data={USER_TABLE_CELL_DATA} checkbox={true} />
          <CustomTableBody
            data={userData}
            checkbox={true}
            handleCheck={handleCheck}
          />
        </Table>
      </TableContainer>
      <PagenationButton
        currentPage={userQueryParams.pageNum}
        isMaxPage={isMaxPage}
        handlePageNum={handleCurrentPage}
      />
      {isModalOpen && <NewUserModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default UserList;
