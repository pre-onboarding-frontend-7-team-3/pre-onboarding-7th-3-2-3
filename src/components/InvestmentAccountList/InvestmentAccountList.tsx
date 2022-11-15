import React, { Key } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import IsActiveStateFilter from "./filter/dropbox/isActiveStateFilter/IsActiveStateFilter";
import AccountStateFilter from "./filter/dropbox/accountStateFilter/AccountStateFilter";
import { useRecoilState } from "recoil";
import { inputValueState } from "src/store/search";
import { columns } from "./table/Columns";
import { useQuery } from "@tanstack/react-query";
import { useData } from "./api/handleQueryAccountList";

const InvestmentAccountList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const token = localStorage.getItem("access_token");
  const [value] = useRecoilState(inputValueState);

  const header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const { data, error, isFetching, isLoading } = useData();

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.code;

  const stateFilter = (e: any) => {
    const status = e.target.getAttribute("data-value");
    console.log(status);
    axios.get(`http://localhost:4000/accounts?status=${status}`, header);
  };

  // const activeFilter = (e: any) => {
  //   const is_active = e.target.getAttribute("idx");
  //   let active;
  //   if (is_active === "1") {
  //     active = true;
  //   }
  //   if (is_active === "2") {
  //     active = false;
  //   }

  //   axios
  //     .get(`http://localhost:4000/accounts?is_active=${active}`, header)
  //     .then(({ data }) => setDatas(data));
  // };

  // const searchFilter = (e: any) => {
  //   e.preventDefault();
  //   axios
  //     .get(`http://localhost:4000/accounts?q=${value}`, header)
  //     .then(({ data }) => setDatas(data));
  // };

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: {
    target: { value: string | number };
  }) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowsData: {
    [x: string]: Key | null | undefined;
    name: string;
    accountNum: number;
    customerName: string;
    accountState: number;
    principal: number;
    totalAsset: number;
    profitOrLoss: string;
    profitRate: string;
    productName: string;
    accountActive: string;
    accountCreativeDate: number;
  }[] = [];

  {
    data.forEach(
      (data: {
        broker_id: any;
        number: any;
        status: any;
        payments: any;
        assets: any;
        name: any;
        is_active: boolean;
        created_at: any;
      }) => {
        rowsData.push({
          name: data.broker_id,
          accountNum: data.number,
          customerName: "은지",
          accountState: data.status,
          principal: data.payments,
          totalAsset: data.assets,
          profitOrLoss: "5%",
          profitRate: "5%",
          productName: data.name,
          accountActive: data.is_active === true ? "활성화" : "비활성화",
          accountCreativeDate: data.created_at,
        });
      }
    );
  }

  const rows = rowsData;

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <FilterLayout>
          <AccountStateFilter stateFilter={stateFilter} />
          {/* <IsActiveStateFilter activeFilter={activeFilter} />
          <SearchFilter searchFilter={searchFilter} /> */}
        </FilterLayout>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      key={row.uuid}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default InvestmentAccountList;

export const FilterLayout = styled.div`
  display: flex;
  align-items: center;
`;
