import { TableBody, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomTableBody = ({ data }: { data: { [key: string]: any }[] }) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      {data?.map((row: { [key: string]: any }, idx: number) => (
        <TableRow
          key={idx}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          {Object.entries(row).map((data) => {
            return data[0] === "name" ? (
              <TableCell
                onClick={() => navigate(`/accounts/${row.userId}`)}
                component="th"
                align="center"
                scope="row"
              >
                {data[1] && data[1]}
              </TableCell>
            ) : (
              <TableCell component="th" align="center" scope="row">
                {data[1] && data[1]}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
