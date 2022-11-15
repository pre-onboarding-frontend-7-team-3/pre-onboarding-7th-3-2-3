import { useState } from 'react';

import { FormControl, MenuItem, Select } from '@mui/material';

function DropDown({
  initValue,
  saveRecoilNavOption,
  menuItems,
  prefixIcon = '',
  standard,
  style = { m: 1, minWidth: 120 },
}: any) {
  const [option, setOption] = useState(initValue);

  const handleChange = (event: any) => {
    const selectedOption = event.target.value;
    setOption(event.target.value);
    saveRecoilNavOption(selectedOption);
  };

  return (
    <>
      <FormControl variant={standard && 'standard'} sx={style}>
        <Select
          autoWidth
          value={option}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {menuItems.map((menuItem: any, idx: any) => (
            <MenuItem key={idx} value={menuItem.value}>
              {prefixIcon} {menuItem.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default DropDown;
