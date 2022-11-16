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
          {Object.entries(row).map(([userRowkey, userRowVal], idx) => {
            return userRowkey === 'name' ? (
              <TableCell
                onClick={() => navigate(`/users/${data[idx].id}`)}
                component="th"
                align="center"
                scope="row"
                sx={{ color: '#357ae1', cursor: 'pointer', fontWeight: 'bold' }}
                key={idx}
              >
                {userRowVal}
              </TableCell>
            ) : (
              <TableCell
                key={idx}
                component="th"
                align="center"
                scope="row"
              >
                {userRowVal}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
