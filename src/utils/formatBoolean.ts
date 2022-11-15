export const formatBoolean = (value: boolean): string => {
  switch (value) {
    case true:
      return "O";
    case false:
      return "X";
  }
};
