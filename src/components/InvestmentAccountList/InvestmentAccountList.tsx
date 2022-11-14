import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import AccountFilter from "./dropbox/accountStateFilter";

const columns = [
  { id: "name", label: "증권사", minWidth: 70 },
  { id: "accountNum", label: "계좌번호", minWidth: 80 },
  {
    id: "customerName",
    label: "고객명",
    minWidth: 70,
  },
  {
    id: "accountState",
    label: "운용상태",
    minWidth: 100,
    align: "center",
  },
  { id: "principal", label: "계약원금", minWidth: 150 },
  {
    id: "totalAsset",
    label: "총자산",
    minWidth: 100,
  },
  { id: "profitOrLoss", label: "평가손익", minWidth: 100 },
  { id: "profitRate", label: "수익률", minWidth: 100 },
  { id: "productName", label: "상품명", minWidth: 100 },
];

const InvestmentAccountList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [datas, setDatas] = useState([]);
  const token = localStorage.getItem("access_token");

  const header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/accounts", header)
      .then(({ data }) => setDatas(data));
  }, []);
  console.log(datas);

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
    name: string;
    accountNum: number;
    customerName: string;
    accountState: number;
    principal: number;
    totalAsset: number;
    profitOrLoss: string;
    profitRate: string;
    productName: string;
  }[] = [];
  datas.forEach((data) => {
    rowsData.push({
      name: data.broker_id,
      accountNum: data.number,
      customerName: "은지",
      accountState: 1,
      principal: data.payments,
      totalAsset: data.assets,
      profitOrLoss: "5%",
      profitRate: "5%",
      productName: data.name,
    });
  });

  const rows = rowsData;

  const stateFilter = (e: any) => {
    axios
      .get(" http://localhost:4000/accounts?q=2", header)
      .then(({ data }) => setDatas(data));
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <AccountFilter stateFilter={stateFilter} />
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === "number"
                            ? column.format(value)
                            : value} */}
                          {value}
                        </TableCell>
                      );
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
  );
};

export default InvestmentAccountList;
