import { TableCell, TableHead, TableRow } from "@mui/material";

const CustomTableHead = ({ data }: { data: string[] }) => {
  return (
    <TableHead>
      <TableRow>
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
