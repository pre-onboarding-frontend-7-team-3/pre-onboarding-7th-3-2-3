import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomTableBody = ({ data }: { data: { [key: string]: any }[] }) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      {data?.map((row: Record<string, any>, parentIdx: number) => (
        <TableRow
          key={data[parentIdx].uuid}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {Object.entries(row).map(([userRowkey, userRowVal], childIdx) => {
            switch (userRowkey) {
              case 'name':
                return (
                  <TableCell
                    onClick={() => navigate(`/users/${data[parentIdx].id}`)}
                    component="th"
                    align="center"
                    scope="row"
                    sx={{
                      color: '#357ae1',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    key={childIdx}
                  >
                    {userRowVal}
                  </TableCell>
                );

              case 'id':
              case 'uuid':
                return '';

              default:
                return (
                  <TableCell
                    key={childIdx}
                    component="th"
                    align="center"
                    scope="row"
                  >
                    {userRowVal}
                  </TableCell>
                );
            }
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
