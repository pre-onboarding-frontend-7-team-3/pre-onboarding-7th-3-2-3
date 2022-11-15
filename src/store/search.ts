import { atom } from "recoil";

export const dropboxState = atom<string | number>({
  key: "dropboxValue",
  default: "",
});

export const inputValueState = atom<string>({
  key: "searchValue",
  default: "",
});
