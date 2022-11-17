import { TableCell, TableHead, TableRow } from '@mui/material';
import { ACCOUNT_TABLE_HEAD } from '../../../constants/UserTableData';

const InvestmentAccountTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {ACCOUNT_TABLE_HEAD.map(({ id, text }) => (
          <TableCell align="center" key={id}>
            {text}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default InvestmentAccountTableHead;
