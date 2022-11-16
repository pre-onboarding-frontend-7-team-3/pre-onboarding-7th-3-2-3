import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomTableBody = ({ data }: { data: { [key: string]: any }[] }) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      {data?.map((row: Record<string, any>, idx: number) => (
        <TableRow
          key={idx}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {Object.entries(row).map(user => {
            return user[0] === 'name' ? (
              <TableCell
                onClick={() => navigate(`/users/user/${data[idx].id}`)}
                component="th"
                align="center"
                scope="row"
                sx={{ color: '#357ae1', cursor: 'pointer', fontWeight: 'bold' }}
              >
                {user[1]}
              </TableCell>
            ) : (
              <TableCell component="th" align="center" scope="row">
                {user[1]}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
