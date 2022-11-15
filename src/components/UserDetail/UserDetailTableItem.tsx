import { TableBody, TableCell, TableRow } from "@mui/material";
import { GENDER } from "@src/constants/tableData";
import { convertDate } from "@src/utils/convertDate";
import { formatBoolean } from "@src/utils/formatBoolean";
import { UserDetailProps, UserSettingProps } from "./types";

interface Props {
  detail: UserDetailProps;
  setting: UserSettingProps;
}

const UserDetailTableItem = ({ detail, setting }: Props) => {
  const usedDatas = [
    detail?.name,
    GENDER[detail?.gender_origin],
    detail?.birth_date.substring(0, 10), //.split("").slice(0, 10),
    detail?.address + detail?.detail_address,
    detail?.email,
    detail?.phone_number,
    formatBoolean(setting?.allow_marketing_push),
    formatBoolean(setting?.is_active),
    detail?.created_at.substring(0, 10),
    convertDate(detail?.last_login),
  ];

  console.log(usedDatas);

  return (
    <TableBody>
      <TableRow>
        {detail &&
          usedDatas.map((data, idx) => <TableCell key={idx}>{data}</TableCell>)}
      </TableRow>
    </TableBody>
  );
};

export default UserDetailTableItem;

/*
        {detail &&
          Object.values(detail).map((item, idx) => (
            <TableCell key={idx}>{item}</TableCell>
          ))}
*/
