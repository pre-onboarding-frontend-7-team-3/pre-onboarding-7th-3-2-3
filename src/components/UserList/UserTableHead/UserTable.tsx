import { TableCell, TableHead, TableRow } from '@mui/material';
import { USER_TABLE_DATA } from '@src/constants/UserTableData';

const UserTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {USER_TABLE_DATA.map(({ id, text }) => (
          <TableCell key={id}>{text}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UserTableHead;
