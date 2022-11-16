import * as S from "./Dropdown.style";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

type Props = {
  name: string;
  data: any;
  accountQueryParams: any;
  setAccountQueryParams: Function;
};

const inputLabel = {
  broker_id: "브로커명",
  is_active: "계좌활성화",
  status: "계좌상태",
};

const Dropdown = ({
  name,
  data,
  accountQueryParams,
  setAccountQueryParams,
}: Props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountQueryParams((prev) => {
      return { ...prev, pageLimit: 1, [name]: value };
    });
  };

  return (
    <FormControl sx={S.customDropdownStyle.form} size="small">
      <InputLabel id="demo-simple-select-label">
        {inputLabel[name as keyof typeof inputLabel]}
      </InputLabel>
      <Select
        name={name}
        label={inputLabel[name as keyof typeof inputLabel]}
        value={accountQueryParams[name]}
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
