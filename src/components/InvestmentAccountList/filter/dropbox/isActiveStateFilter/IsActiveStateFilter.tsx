import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useDropdown from "../hooks/useDropdown";
import { ISACTIVE_DATA } from "../constant/isActiveData";

export interface Props {
  activeFilter: React.MouseEventHandler<HTMLAnchorElement>;
}

const IsActiveStateFilter = ({ activeFilter }: Props) => {
  const { handleChange, state } = useDropdown();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">활성상태</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={state}
        defaultValue={""}
        label="isactive"
        onChange={handleChange}
      >
        {ISACTIVE_DATA.map((data) => {
          return (
            <MenuItem
              onClick={activeFilter}
              value={data.id}
              idx={data.idx}
              key={data.id}
            >
              {data.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default IsActiveStateFilter;
