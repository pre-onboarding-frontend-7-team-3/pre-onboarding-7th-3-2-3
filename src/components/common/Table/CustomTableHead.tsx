import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
interface Props {
  data: string[];
  checkbox?: boolean;
}
// { data: string[] }
const CustomTableHead = ({ data, checkbox }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {checkbox ? (
          <TableCell key="checkboxHead" align="center" size="small">
            <Checkbox disabled />
          </TableCell>
        ) : null}
        {data?.map((list, id) => (
          <TableCell key={id} align="center">
            {list}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
