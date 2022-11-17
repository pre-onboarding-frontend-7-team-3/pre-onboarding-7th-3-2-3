import * as S from "./Dropdown.style";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type Props = {
  name: string;
  data: any;
  setAccountQueryParams: Function;
};

const inputLabel = {
  broker_id: "브로커명",
  is_active: "계좌활성화",
  status: "계좌상태",
  is_staff: "임직원 계좌 여부",
};

const Dropdown = ({ name, data, setAccountQueryParams }: Props) => {
  const [selectVal, setSelectVal] = useState("");

  const handleChange = (e: SelectChangeEvent<any>) => {
    const { name, value } = e.target;
    setAccountQueryParams((prev: any) => {
      return { ...prev, pageNum: 1, [name]: value };
    });
    setSelectVal(value);
  };

  return (
    <FormControl sx={S.customDropdownStyle.form} size="small">
      <InputLabel id="demo-simple-select-label">
        {inputLabel[name as keyof typeof inputLabel]}
      </InputLabel>
      <Select
        name={name}
        label={inputLabel[name as keyof typeof inputLabel]}
        value={selectVal}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={S.customDropdownStyle.select}
      >
        {data.map(
          ({ label, value }: { label: string; value: string }, idx: number) => {
            return (
              <MenuItem
                key={idx}
                value={value}
                sx={S.customDropdownStyle.menuItem}
              >
                {label}
              </MenuItem>
            );
          }
        )}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
