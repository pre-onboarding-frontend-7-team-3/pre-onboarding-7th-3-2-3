import * as S from "./Dropdown.style";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({
  name,
  data,
  accountQueryParams,
  setAccountQueryParams,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountQueryParams((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <FormControl sx={S.customDropdownStyle.form} size="small">
      <Select
        name={name}
        value={accountQueryParams[name]}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={S.customDropdownStyle.select}
      >
        {data.map(({ label, value }, idx) => {
          return (
            <MenuItem
              key={idx}
              value={value}
              sx={S.customDropdownStyle.menuItem}
            >
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
