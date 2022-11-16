/** @jsxImportSource @emotion/react */
import { ReactNode, useState } from "react";
import { css } from "@emotion/react";

import { convertDate } from "@src/utils/convertDate";
import { formatBoolean } from "@src/utils/formatBoolean";

import { GENDER } from "@src/constants/tableData";

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
  이름: string;
  성별: string;
  생년월일: string;
  주소: string;
  이메일: string;
  핸드폰: string;
  "혜택 정보 수신": string;
  "활성화 여부": string;
  "가입 날짜": string;
  "최근 로그인": string;
}

const UserInfoTable = ({
  detail,
  setting,
  isEditing,
  setInputState,
}: Props) => {
  const INDEX_OF_CAN_BE_EDITED = 0;
  const settingInputProps = (idx: number) => {
    if (isEditing && INDEX_OF_CAN_BE_EDITED === idx) {
      return;
    }
    return { readOnly: true };
  };

  const editTargetArr = ["이름"];

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const defaultUserData: defaultUserDataProps = {
    이름: detail.name,
    성별: GENDER[detail.gender_origin],
    생년월일: detail.birth_date.substring(0, 10),
    주소: detail.address + detail.detail_address,
    이메일: detail.email,
    핸드폰: detail.phone_number,
    "혜택 정보 수신": formatBoolean(setting.allow_marketing_push),
    "활성화 여부": formatBoolean(setting.is_active),
    "가입 날짜": detail.created_at.substring(0, 10),
    "최근 로그인": convertDate(detail.last_login),
  };

  return (
    <>
      <TableHead css={{ backgroundColor: "white" }}>
        <TableRow>
          {Object.keys(defaultUserData).map(
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
