import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserTableItem = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <TableBody>
      {data?.data.map((row: any, idx: number) => (
        <TableRow
          key={idx}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell
            onClick={() => navigate(`/users/user/${row.id}`)}
            component="th"
            align="center"
            scope="row"
          >
            {row.name}
          </TableCell>
          <TableCell align="center">계좌수</TableCell>
          <TableCell align="center">{row.email}</TableCell>
          <TableCell align="center">{row.gender_origin}</TableCell>
          <TableCell align="center">
<<<<<<< HEAD
            {row.birth_date?.split("").slice(0, 10)}
          </TableCell>
          <TableCell align="center">{row.phone_number}</TableCell>
          <TableCell align="center">
            {row.last_login?.split("").slice(0, 10)}
          </TableCell>
          <TableCell align="center">
            {row.created_at?.split("").slice(0, 10)}
=======
            {row.birth_date.split('').slice(0, 10)}
          </TableCell>
          <TableCell align="center">{row.phone_number}</TableCell>
          <TableCell align="center">
            {row.last_login.split('').slice(0, 10)}
          </TableCell>
          <TableCell align="center">
            {row.created_at.split('').slice(0, 10)}
>>>>>>> 7bfc10e660fcaa3f5f1c5159f5dc4f12474eb342
          </TableCell>
          <TableCell align="center">
            {row.is_active ? '활성화' : '비활성화'}
          </TableCell>
          <TableCell align="center">
<<<<<<< HEAD
            {row.created_at?.split("").slice(0, 10)}
=======
            {row.created_at.split('').slice(0, 10)}
>>>>>>> 7bfc10e660fcaa3f5f1c5159f5dc4f12474eb342
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default UserTableItem;
