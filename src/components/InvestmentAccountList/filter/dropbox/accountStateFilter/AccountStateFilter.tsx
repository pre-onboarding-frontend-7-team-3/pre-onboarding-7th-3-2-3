import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { STATE_DATA } from "../constant/stateData";
import useDropdown from "../hooks/useDropdown";

const AccountStateFilter = ({ stateFilter }: any) => {
  const { handleChange, state } = useDropdown();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">운용상태</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        defaultValue={""}
        value={state}
        label="state"
        onChange={handleChange}
      >
        {STATE_DATA.map((data) => {
          return (
            <MenuItem onClick={stateFilter} value={data.id} key={data.id}>
              {data.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default AccountStateFilter;
