import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDown = ({ dropDownData }) => {
  const customStyle = {
    select: {
      width: '100px',
      height: '40px',
      borderRadius: '10px',
      fontWeight: '500',
      fontSize: '14px',
    },
    menuItem: {
      width: '100px',
      fontWeight: '500',
      fontSize: '14px',
    },
    button: {
      minWidth: '108px',
      height: '40px',
      padding: '12px 20px',
      color: '#FFFFFF',
      backgroundColor: `"#586CF5"`,
      borderRadius: '10px',
    },
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        // onChange={}
        // value={}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={customStyle.select}
      >
        {dropDownData.map(({ label }, idx) => (
          <MenuItem key={idx} value={label} sx={customStyle.menuItem}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
