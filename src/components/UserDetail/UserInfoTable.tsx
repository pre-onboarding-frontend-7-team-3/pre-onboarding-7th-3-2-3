/** @jsxImportSource @emotion/react */
import { ReactNode, useMemo } from "react";
import { css } from "@emotion/react";

import { convertDate } from "@src/utils/convertDate";
import { formatBoolean } from "@src/utils/formatBoolean";

import { GENDER } from "@src/constants/tableData";
import { USER_DETAIL_TABLE_CELL_DATA } from "@src/constants/tableData";

import { UserDetailProps, UserSettingProps } from "./types";

import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputBase,
} from "@mui/material";

interface Props {
  detail: UserDetailProps;
  setting: UserSettingProps;
  isEditing: any;
  setInputState: any;
}

interface defaultUserDataProps {
  name: string;
  gender_origin: string;
  birth_date: string;
  address: string;
  email: string;
  phone_number: string;
  allow_marketing_push: string;
  is_active: string;
  created_at: string;
  last_login: string;
}

const UserInfoTable = ({
  detail,
  setting,
  isEditing,
  setInputState,
}: Props) => {
  console.log(`AT USERIFNO : `,detail)
  console.log('1')
  const INDEX_OF_CAN_BE_EDITED = 0;
  const settingInputProps = (idx: number) => {
    if (isEditing && INDEX_OF_CAN_BE_EDITED === idx) {
      return;
    }
    return { readOnly: true };
  };

  const editTargetArr = ["name"];

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };
  console.log('2')
  const defaultUserData: defaultUserDataProps = useMemo(() => {
    return {
      name: detail?.name,
      gender_origin: GENDER[detail?.gender_origin],
      birth_date: detail?.birth_date.substring(0, 10),
      address: detail?.address + detail?.detail_address,
      email: detail?.email,
      phone_number: detail?.phone_number,
      allow_marketing_push: formatBoolean(setting?.allow_marketing_push),
      is_active: formatBoolean(setting?.is_active),
      created_at: detail?.created_at.substring(0, 10),
      last_login: convertDate(detail?.last_login),
    };
  }, [detail, setting]);
  console.log('3')
  console.log(`AT USERIFNO : `,detail)
  return (
    <>
      <TableHead css={{ backgroundColor: "white" }}>
        <TableRow>
          {USER_DETAIL_TABLE_CELL_DATA.map(
            (headData: ReactNode, idx: number) => {
              return (
                <TableCell key={idx} align="center">
                  {headData}
                </TableCell>
              );
            }
          )}
        </TableRow>
      </TableHead>

      <TableBody css={{ backgroundColor: "white" }}>
        <TableRow>
          {Object.entries(defaultUserData).map(
            ([head, body]: Array<string>, idx: number) => {
              return (
                <TableCell key={idx} align="center">
                  <InputBase
                    css={inputStyle(isEditing && editTargetArr.includes(head))}
                    defaultValue={body}
                    {...settingInputProps(idx)}
                    onChange={inputChange}
                  />
                </TableCell>
              );
            }
          )}
        </TableRow>
      </TableBody>
    </>
  );
};

export default UserInfoTable;

const inputStyle = (isEditing: any) => css`
  height: 30px;
  padding: 2px 0;
  color: "#3A474E";
  font-size: 14px;
  font-weight: 500;
  ${isEditing &&
  css`
    border: solid 1px #3a474e;
    border-radius: 5px;
  `}
`;