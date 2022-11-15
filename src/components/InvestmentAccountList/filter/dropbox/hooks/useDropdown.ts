import * as React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useRecoilState } from "recoil";
import { dropboxState } from "@src/store/search";

const useDropdown = () => {
  const [state, setState] = useRecoilState<string | number>(dropboxState);
  const handleChange = (e: SelectChangeEvent) => {
    setState(e.target.value);
  };
  return { handleChange, state };
};

export default useDropdown;
