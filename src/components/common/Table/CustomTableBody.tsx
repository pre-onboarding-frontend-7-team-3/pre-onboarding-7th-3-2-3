import * as S from './CustomTableBody.style';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomTableBody = ({ data }: { data: { [key: string]: any }[] }) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      {data?.map((row: Record<string, any>, parentIdx: number) => (
        <TableRow
          key={data[parentIdx].uuid}
          sx={S.customTableBodyStyle.TableRow}
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
                    sx={S.customTableBodyStyle.nameCell}
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
                    sx={S.customTableBodyStyle.defaultCell}
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
