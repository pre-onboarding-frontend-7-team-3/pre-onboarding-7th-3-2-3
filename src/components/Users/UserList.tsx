import { useMemo, useState } from "react";
import styled from "styled-components";

import { Table, TableContainer, Paper } from "@mui/material";

import { DROPDOWN_DATA } from "@src/constants/dropDownData";
import SearchInput from "../InvestmentAccountList/component/SearchInput";
import Dropdown from "../InvestmentAccountList/Dropdown/Dropdown";
import PagenationButton from "../InvestmentAccountList/component/PagenationButton";
import { useGetUserListQuery } from "./UserList-query/UserList.query";
import CustomTableBody from "../common/Table/CustomTableBody";
import { USER_TABLE_CELL_DATA } from "@src/constants/tableData";
import CustomTableHead from "../common/Table/CustomTableHead";

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [accountQueryParams, setAccountQueryParams] = useState({
    pageLimit: currentPage,
  });

  const {
    data: defaultUserData,
    isLoading,
    isError,
  } = useGetUserListQuery(accountQueryParams);

  // const maxPage = Math.floor(defaultAccountListData?.data?.length / 20) + 1;
  const maxPage = 5;

  // usePrefetchAccountList(currentPage, maxPage);

  const handleCurrentPage = (num: number) => {
    setCurrentPage((prev) => prev + num);
    setAccountQueryParams((prev) => {
      return {
        ...prev,
        pageLimit: currentPage + num,
      };
    });
  };

  const userData = useMemo(
    () =>
      defaultUserData?.data?.map((data: any) => ({
        name: data.name,
        account_count: "계좌수",
        email: data.email,
        gender_origin: data.gender_origin,
        birth_date: data.birth_date.split("").slice(0, 10),
        phone_number: data.phone_number,
        last_login: data.last_login.split("").slice(0, 10),
        receive: "수신동의",
        active: "계좌활성화",
        created_at: data.created_at.split("").slice(0, 10),
      })),
    [defaultUserData]
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
      <Container>
        <SearchInput setAccountQueryParams={setAccountQueryParams} />
        {DROPDOWN_DATA.map(({ id, name, data }) => (
          <Dropdown
            key={id}
            accountQueryParams={accountQueryParams}
            setAccountQueryParams={setAccountQueryParams}
            name={name}
            data={data}
          />
        ))}
      </Container>
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
    </>
  );
};

export default UserList;

const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
`;
