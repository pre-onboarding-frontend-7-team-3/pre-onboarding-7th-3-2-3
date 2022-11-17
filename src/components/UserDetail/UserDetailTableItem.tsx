/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TableBody, TableCell, TableRow, InputBase } from "@mui/material";
import { GENDER } from "@src/constants/tableData";
import { convertDate } from "@src/utils/convertDate";
import { formatBoolean } from "@src/utils/formatBoolean";
import { UserDetailProps, UserSettingProps } from "./types";

interface Props {
  detail: UserDetailProps;
  setting: UserSettingProps;
  isModify: boolean;
}

const UserDetailTableItem = ({ detail, setting, isModify }: Props) => {
  const usedDatas = [
    detail?.name,
    GENDER[detail?.gender_origin],
    detail?.birth_date.substring(0, 10),
    detail?.address + detail?.detail_address,
    detail?.email,
    detail?.phone_number,
    formatBoolean(setting?.allow_marketing_push),
    formatBoolean(setting?.is_active),
    detail?.created_at.substring(0, 10),
    convertDate(detail?.last_login),
  ];
  const modifiableIdx = 0;
  const inputProps = (idx: number) => {
    return isModify && modifiableIdx === idx ? {} : { readOnly: true };
  };

  return (
    <TableBody>
      <TableRow>
        {usedDatas.map((data, idx) => (
          <TableCell key={idx}>
            <InputBase
              css={inputStyle(isModify && modifiableIdx === idx)}
              {...inputProps(idx)}
              defaultValue={data}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  );
};

export default UserDetailTableItem;

const inputStyle = (isModify: any) => css`
  height: 10px;
  font-weight: 700;
  font-size: 12px;
  color: "#3A474E";
  border: ${isModify ? "solid 2px red" : ""};
`;