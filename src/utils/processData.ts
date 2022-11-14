export const changeDotToComma = (price: string) => {
  return price.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const maskingAccountNumber = (number: string) => {
  let originNumber = number.split("");
  originNumber.forEach((number, i) => {
    if (i === 0 || i === originNumber.length - 1) return;
    originNumber[i] = "*";
  });
  return originNumber;
};
