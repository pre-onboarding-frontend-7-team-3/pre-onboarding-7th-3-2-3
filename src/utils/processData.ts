import { BROKER_FORMAT } from "@src/constants/tableData";

export const changeDotToComma = (price: string) => {
  return price.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const maskingAccountNumber = (number: string) => {
  let originNumber = number.split("");
  originNumber.forEach((number, i) => {
    if (i === 0 || i === originNumber.length - 1) return;
    originNumber[i] = "*";
  });
  return originNumber.join("");
};

export const handleTableDataToSelectData = (query: {
  [key: string]: string | number;
}) => {
  const result = [];
  for (const [key, value] of Object.entries(query)) {
    result.push({
      label: value,
      value: key,
    });
  }
  return result;
};

export const formattingAccountNumber = (number: string, broker_id: string) => {
  const format = BROKER_FORMAT[broker_id].split("-");
  let originNumber = maskingAccountNumber(number);
  let formattedNumber = "";
  for (let i of format) {
    formattedNumber += originNumber.slice(0, i.length) + "-";
    originNumber = originNumber.slice(i.length);
  }
  return formattedNumber.slice(0, -1);
};

export const maskingPhoneNumber = (phoneNumber: string) => {
  const isPhoneNumber = /-[0-9]{4}-/.test(phoneNumber);
  if (!isPhoneNumber) return phoneNumber;
  if (isPhoneNumber) {
    return phoneNumber.replace(
      phoneNumber,
      phoneNumber.toString().replace(/-[0-9]{4}-/g, "-****-")
    );
  }
};

export const maskingUserName = (userName: string) => {
  if (!userName) return;
  if (userName.length > 2) {
    let originName = userName.split("");
    originName.forEach((_, i) => {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = "*";
    });
    let joinName = originName.join();
    return joinName.replace(/,/g, "");
  } else {
    let pattern = /.$/;
    return userName.replace(pattern, "*");
  }
};
