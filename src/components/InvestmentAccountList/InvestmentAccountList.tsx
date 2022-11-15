import { AccountType } from '@src/types/account';
import { useMemo } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.white};
  text-align: center;
  overflow-y: scroll;
`;

const TableContainer = styled.table`
  width: 100%;
  height: 100%;
  border: 1px solid #444444;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: ${({ theme }) => theme.bg.darkBlue};
  color: white;
  border: 1px solid #444444;
  padding: 10px;
`;
const TableBody = styled.tbody``;
const TableSubHead = styled.th`
  border: 1px solid #444444;
  padding: 10px;
`;
const TableRow = styled.tr``;
const TableData = styled.td`
  border: 1px solid #444444;
  padding: 10px;
`;

const Table = ({ columns, data }: { columns: any; data: any }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TableContainer {...getTableProps()}>
      <TableHeader>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableSubHead {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableSubHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => (
                <TableData {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </TableData>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

const InvestmentAccountList = ({
  accounts,
}: {
  accounts: AccountType[] | undefined;
}) => {
  const columns = useMemo(
    () => [
      {
        accessor: 'userName',
        Header: '고객명',
      },
      {
        accessor: 'broker_id.name',
        Header: '브로커명',
      },
      {
        accessor: 'number',
        Header: '계좌번호',
      },
      {
        accessor: 'status.name',
        Header: '계좌상태',
      },
      {
        accessor: 'name',
        Header: '계좌명',
      },
      {
        accessor: 'assets',
        Header: '평가금액',
      },
      {
        accessor: 'payments',
        Header: '입금금액',
      },
      {
        accessor: 'is_active',
        Header: '계좌활성화여부',
      },
      {
        accessor: 'created_at',
        Header: '계좌개설일',
      },
    ],
    []
  );
  return (
    <Wrapper>
      <Table columns={columns} data={accounts?.slice(0, 40)} />
    </Wrapper>
  );
};

export default InvestmentAccountList;
