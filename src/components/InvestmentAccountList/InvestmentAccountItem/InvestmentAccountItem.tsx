import { TableBody, TableCell, TableRow } from '@mui/material';

import { changeDotToComma, maskingAccountNumber } from '@src/utils/processData';
import { STATUS_FORMAT, BROKERS_FORMAT } from '@src/constants/tableData';
import { useNavigate } from 'react-router-dom';

const InvestmentAccountItem = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      {data?.data.map((row: any, idx: number) => (
        <TableRow
          key={idx}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell
            onClick={() => navigate(`/accounts/${row.userId}`)}
            component="th"
            align="center"
            scope="row"
          >
            {row.user?.name}
          </TableCell>
          <TableCell align="center">{BROKERS_FORMAT[row.broker_id]}</TableCell>
          <TableCell align="center">
            {maskingAccountNumber(row.number)}
          </TableCell>
          <TableCell align="center">{STATUS_FORMAT[row.status]}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{changeDotToComma(row.assets)}</TableCell>
          <TableCell align="center">{changeDotToComma(row.payments)}</TableCell>
          <TableCell align="center">
            {row.is_active ? '활성화' : '비활성화'}
          </TableCell>
          <TableCell align="center">
            {row.created_at.split('').slice(0, 10)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default InvestmentAccountItem;
