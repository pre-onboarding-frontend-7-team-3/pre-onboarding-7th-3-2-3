import { TableCell, TableHead, TableRow } from "@mui/material";

interface Props {
  items: string[];
}

const UserDetailTableHead = ({ items }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {items.map((item, idx) => (
          <TableCell key={idx} align="center">
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UserDetailTableHead;
