import * as S from './CustomTableBody.style';
import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: { [key: string]: any }[];
  checkbox?: boolean;
  handleCheck?: (userId: string) => void;
}

const CustomTableBody = ({ data, checkbox, handleCheck }: Props) => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleCheck) {
      handleCheck(e.target.value);
    }
  };

  return (
    <TableBody>
      {data?.map((row: Record<string, any>, parentIdx: number) => (
        <TableRow
          key={data[parentIdx].uuid}
          sx={S.customTableBodyStyle.TableRow}
        >
          {checkbox && (
            <TableCell align="center" size="small">
              <Checkbox value={data[parentIdx].id} onChange={handleChange} />
            </TableCell>
          )}
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
